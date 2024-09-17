import fs from 'fs'
import { read } from 'gray-matter'
import { marked } from 'marked'
import path from 'path'
import { h } from 'preact'
import { render } from 'preact-render-to-string'

interface Post {
    data: {
        date: string
        favicon: string
        title: string
        description: string
    }
    content: string
    path: string
}

const posts = fs.readdirSync('post').map(
    file => read(`post/${file}`)).sort(
        (a, b) => a.data.date > b.data.date ? -1 : 1) as unknown as Post[]

const index = read('index.md')

function htmlPath(post: Post) {
    return `${path.basename(post.path, '.md')}.html`
}

function favicon(icon: string) {
    return <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`} />
}

const index_html =
    <html lang="he-il" dir="rtl">
        <head>
            <link rel="stylesheet" href="index.css" />
            {favicon(index.data.favicon)}
            <title>{index.data.title}</title>
        </head>
        <body>
            <main>
                <div dangerouslySetInnerHTML={{ __html: marked(index.content) as string }}></div>
                <div className="posts">
                    {posts.map(post =>
                        <a class="block" href={htmlPath(post)}>
                            <div className="post">
                                <div className="row">
                                    <h2>{post.data.title}</h2>
                                    <time>{post.data.date}</time>
                                </div>
                                <p>{post.data.description}</p>
                            </div>
                        </a>
                    )}
                </div>
            </main>
        </body>
    </html>


fs.writeFileSync(
    'docs/index.html',
    render(index_html))


function renderPost(post: Post) {
    fs.writeFileSync(
        `docs/${path.basename(post.path, '.md')}.html`,
        render(
            <html lang="he-il" dir="rtl">
                <head>
                    <link rel="stylesheet" href="index.css" />
                    {favicon(post.data.favicon)}
                    <title>{post.data.title}</title>
                </head>
                <body>
                    <main>
                        <article>
                            <div dangerouslySetInnerHTML={{ __html: marked(post.content) as string }}></div>
                        </article>
                        <script defer src="https://i.emote.com/js/emote.js"></script>
                        <div id="emote_com"></div>
                    </main>
                </body>
            </html>
        )
    )
}

posts.map(post => post as unknown as Post).forEach(renderPost)


console.log('done')