import fs from 'fs'
import { h } from 'preact'
import { render } from 'preact-render-to-string'

const content = fs.readFileSync('index.md').toString()
const output =

    <html>
        <head>
        </head>
        <body>
            <div id="content">
                {content}
            </div>
        </body>
    </html>


console.log(content)
console.log(render(output))

fs.writeFileSync(
    'docs/index.html',
    render(output)
)
