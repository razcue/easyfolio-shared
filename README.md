# Easyfolio Shared Components

Reusable Vue components for personal pages, portfolios, and more. Tailored for [EasyFolio Template](https://github.com/razcue/easyfolio-template) and [EasyFolio Hub](https://github.com/razcue/easyfolio-hub) projects.

---

## Features

- **Vue 3 components** with utility-first styling.
- **Bundled CSS**: All utility classes used (via UnoCSS), plus component styles.
- **Fallback CSS variables** for color and layout – works out-of-the-box, customizable.

---

## Installation

Install from npm:

```bash
npm install @razcue/easyfolio-shared
```

---

## Usage (Vue Project)

In your main entry file (e.g., `main.js` or `main.ts`):

```js
import '@razcue/easyfolio-shared/dist/bundle.css'; // Contains all required styles
```

Or using Nuxt

```js
export default defineNuxtConfig({
    ...
    css: ["@razcue/easyfolio-shared/dist/bundle.css"],
});
```

You could also use only the necessary files

```js
// Contains component declared styles
import '@razcue/easyfolio-shared/dist/easyfolio-shared.css';
// Contains all required utility classes (from UnoCSS)
import '@razcue/easyfolio-shared/dist/uno-css.css.css';
// Contains CSS variables
import '@razcue/easyfolio-shared/dist/fallback-vars.css';
```

Then import and use any shared component:

```js
import { LineItem } from '@razcue/easyfolio-shared';
```

---

## Fallback CSS Variables

All components use CSS variables for easy theming.  
Defaults are included in the CSS bundle:

```css
:root {
  --color-bg-soft: #f5f5f5;
  --color-border: #e0e0e0;
  --color-text: #222;
  --icon-top-position: 0px;
  /* ...extend as needed */
}
```

You can override these in your own stylesheet to match your brand/theme.

---

## Troubleshooting

- If a component’s style looks broken, make sure your HTML includes the CSS bundle and the fallback variables are present.
- You can customize variables by overriding them in your own stylesheet.

---

## Author

Rayko Azcue Pérez ([@razcue](https://github.com/razcue))