[![](https://badgen.net/npm/dm/markdown-theme)](https://www.npmjs.com/package/markdown-theme)
[![](https://badgen.net/jsdelivr/hits/npm/markdown-theme)](https://cdn.jsdelivr.net/npm/markdown-theme@0.1.4/dist/)
![](https://badgen.net/bundlephobia/minzip/markdown-theme)

# Markdown Themes

使用 [precss](https://github.com/jonathantneal/precss) (- sass like 语法) 与 [tailwindcss](https://tailwindcss.com/) 开发 Markdown 的丰富主题。

| Theme                  | 中文  | Author                                                                                  | Preview                                                              |
|------------------------|-----|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| github                 | -   | [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css) | [Preview](https://markdown-theme.vercel.app/#github)                 |
| shanchui               | 山吹  | [#66CCFF](https://github.com/elyhg)                                                     | [Preview](https://markdown-theme.vercel.app/#shanchui)               |
| shanyue                | 山月  | [shanyue](https://github.com/shfshanyue)                                                | [Preview](https://npm.devtool.tech/lodash)                           |
| condensed-night-purple | 凝夜紫 | [童欧巴](https://github.com/Geekhyt)                                                       | [Preview](https://markdown-theme.vercel.app/#condensed-night-purple) |


## Usage

### With npm

``` bash
$ yarn add markdown-theme
```

通过引入 CSS 使用:

``` js
import 'markdown-theme/themes/github.css'
```

通过引入 JS 使用(以字符串的形式引入):

``` js
import 'markdown-theme/dist/github.js'

// 列出所有的 Markdown 主题, name 为所在的文件路径，cn 为其中文名陈
import themes from 'markdown-theme'
{
  "github": {
    "name": "github"
  },
  "shanchui": {
    "name": "shanchui",
    "cn": "山吹"
  },
  "shanyue": {
    "name": "shanyue",
    "cn": "山月"
  },
  "condensed-night-purple": {
    "name": "condensed-night-purple",
    "cn": "凝夜紫"
  },
  "chocolate": {
    "name": "chocolate",
    "cn": "巧克力"
  },
  "v-green": {
    "name": "v-green",
    "cn": "微绿"
  }
}
```
### With CDN

``` html
<link href="https://cdn.jsdelivr.net/npm/markdown-theme/themes/github.css" rel="stylesheet">
```

## 开发一个主题

1. `npm run watch` 监听文件变动，并在另外一个终端 `npm run dev` 启动服务
1. 使用 `sass-like` 的语法和 `tailwindcss` 开发 CSS 主题，并把该文件保存在 `src` 目录下
1. 在浏览器输入 `http://localhost:5000#THEME_PATH` 进行主题预览，其中 `THEME_PATH` 是你新建的主题文件, eg. `http://localhost:5000#github`
1. `npm run build`，生成纯 CSS 及纯 JS 文件
1. 提交一个 PR
