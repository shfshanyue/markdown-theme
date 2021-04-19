![](https://badgen.net/npm/dm/markdown-theme)
![](https://badgen.net/jsdelivr/hits/npm/markdown-theme)
![](https://badgen.net/bundlephobia/minzip/markdown-theme)

# Markdown Themes

Use [precss](https://github.com/jonathantneal/precss) (- sass like syntax) and [tailwindcss](https://tailwindcss.com/) develop markdown themes.

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

``` js
import 'markdown-theme/themes/github'
```

### With CDN

``` html
<link href="https://cdn.jsdelivr.net/npm/markdown-theme/themes/github.css" rel="stylesheet">
```

## Development

1. `npm run watch` and `npm run dev` in another
1. Write css to src dictionry optionaly with sass-like syntax (precss) and tailwindcss
1. Go to `http://localhost:5000#THEME_PATH` preview, eg. `http://localhost:5000/github`
1. `npm run build`
1. Sumbit a PR
