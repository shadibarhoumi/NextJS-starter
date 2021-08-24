# Shadi's Sick NextJS Starter®

This is a a blank NextJS starter project that includes:

- `styled-components` 💅
- `styles/GlobalStyles.js` which includes a CSS reset and CSS variables for colors.
- `lib/constants.js` which includes CSS breakpoints, colors, and font weights.
- `.prettierrc` with pre-defined Prettier formatting settings
- `.babelrc` with `babel-styled-components-plugin` to work with Next's SSR

To add Google fonts, add the `<link>` tag to the `<Head>` component in `pages/_document.js`.

To add a local font, add the font file to the `public/fonts` folder and add an `@import` rule in `styles/GLobalStyles.js`.

## Getting Started

First, install dependencies.

```bash
yarn install
#or
npm install
```

Then start the dev server.

```bash
yarn dev
#or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

You also have a new page to go to town on at `pages/new.js`.

_Dedicated to Wuyan <3_
