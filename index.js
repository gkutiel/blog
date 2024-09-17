"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const gray_matter_1 = require("gray-matter");
const marked_1 = require("marked");
const preact_1 = require("preact");
const preact_render_to_string_1 = require("preact-render-to-string");
const content = marked_1.marked.parse(fs_1.default.readFileSync('index.md').toString());
const output = (0, preact_1.h)("html", { lang: "he-il", dir: "rtl" },
    (0, preact_1.h)("head", null,
        (0, preact_1.h)("link", { rel: "stylesheet", href: "index.css" })),
    (0, preact_1.h)("body", null,
        (0, preact_1.h)("main", { dangerouslySetInnerHTML: { __html: content } })));
fs_1.default.writeFileSync('docs/index.html', (0, preact_render_to_string_1.render)(output));
const posts = fs_1.default.readdirSync('post').map(file => (0, gray_matter_1.read)(`post/${file}`));
console.log(posts);
