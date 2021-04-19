![](https://badgen.net/npm/dm/markdown-theme)
![](https://badgen.net/jsdelivr/hits/npm/markdown-theme)
![](https://badgen.net/bundlephobia/minzip/markdown-theme)

# Markdown Themes

Use [precss](https://github.com/jonathantneal/precss) (- sass like syntax) and [tailwindcss](https://tailwindcss.com/) develop markdown themes.

| Theme    | Author    |  Preview   |
| --- | --- | --- |
| github    |   [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)  |   [Preview](https://markdown-theme.vercel.app/#github)  |
| shanchui    | [#66CCFF](https://github.com/elyhg)    |   [Preview](https://markdown-theme.vercel.app/#shanchui)  |
| shanyue    | [shanyue](https://github.com/shfshanyue)    |   [Preview](https://npm.devtool.tech/lodash)  |

## Usage

``` bash
$ yarn add markdown-theme
```

**With `import/require`**

``` js
import 'markdown-theme/themes/github'
```

**With CDN**

``` html
<link href="https://cdn.jsdelivr.net/npm/markdown-theme/themes/github.css" rel="stylesheet">
```

## Development

1. `npm run watch` and `npm run dev` in another
1. Write css to src dictionry optionaly with sass-like syntax (precss) and tailwindcss
1. Go to `http://localhost:5000#THEME_PATH` preview, eg. `http://localhost:5000/github`
1. `npm run build`
1. Sumbit a PR

