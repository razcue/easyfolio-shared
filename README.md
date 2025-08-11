# Easyfolio Shared Components

Reusable Vue components for portfolios, dashboards, and more.  
Includes a fully extracted CSS bundle of all [UnoCSS](https://github.com/unocss/unocss) utility classes used, so you can use the components **without needing UnoCSS or Tailwind in your own project**.

---

## Features

- **Vue 3 components** with utility-first styling.
- **Bundled CSS**: All utility classes used (via UnoCSS), plus component styles.
- **Fallback CSS variables** for color and layout – works out-of-the-box, customizable.
- **Can be used in Vue projects or as static HTML/CSS.**

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

Then import and use any shared component:

```js
import { LineItem } from '@razcue/easyfolio-shared';

export default {
  components: { LineItem }
};
```

---

## Usage (Static HTML/CSS – No Vue, No UnoCSS Required)

You can use these components in **any HTML project** by copying the markup and including the CSS bundle.

### 1. Include the CSS:

```html
<link rel="stylesheet" href="bundle.css">
```

### 2. Copy the desired component HTML (see `dist/LineItem.html`, etc.)

```html
<div class="item">
  <i class="flex items-center justify-center w-8 h-8 text-[var(--color-text)] lg:absolute lg:top-[var(--icon-top-position)] lg:left-[-26px] lg:w-12 lg:h-12 lg:border lg:border-[var(--color-border)] lg:bg-[var(--color-bg-soft)] lg:rounded-md">
    <!-- icon slot -->
  </i>
  <div class="flex-1 !ml-2">
    <h2 class="text-2xl font-bold mb-2">Heading</h2>
    <!-- slot content -->
  </div>
</div>
```

### 3. Customize slot content or variables as needed.

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

## How it works

- **UnoCSS CLI** scans all component files and outputs only the utility classes actually used.
- A fallback variables block is prepended for safe defaults.
- The CSS bundle (`bundle.css`) includes both, ready for use.

---

## Advanced: Generating Static HTML for Demos

You can render components to static HTML files for demos or documentation using [Vue SSR](https://vuejs.org/api/server-renderer.html):

```js
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import LineItem from './src/components/LineItem.vue';

async function main() {
  const app = createSSRApp(LineItem, { /* props */ });
  const html = await renderToString(app);
  require('fs').writeFileSync('dist/LineItem.html', html);
}
main();
```

---

## Troubleshooting

- If a component’s style looks broken, make sure your HTML includes the CSS bundle and the fallback variables are present.
- You can customize variables by overriding them in your own stylesheet.
- If you use dark/light themes, you can add more CSS variable blocks for those.

---

## Author

[@razcue](https://github.com/razcue)