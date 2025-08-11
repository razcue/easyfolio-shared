const fs = require("fs");

const vars = {
    // globals
    "--modal-left-position": "calc((100vw - 560px) / 2)",
    "--icon-top-position": "calc(50% - 25px)",
    "--section-gap": "160px",
    "--side-to-side": "calc(((100vw - 1280px) / 2) + 5rem)",
    // theme based
    "--color-bg": "#ffffff",
    "--color-bg-soft": "#f8f8f8",
    "--color-bg-mute": "#f2f2f2",
    "--color-text": "#000000",
    "--color-heading": "#2c3e50",
    "--color-primary": "#007bff",
    "--color-border": "#e0e0e0",
    "--color-border-hover": "rgba(60, 60, 60, 0.29)",
    "--color-shadow": "rgba(0, 0, 0, 0.1)",
    "--color-link-hover": "rgba(0, 123, 255, 0.7)",
};

const css = [
    ":root {",
    ...Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`),
    "}",
    "",
].join("\n");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/fallback-vars.css", css);
console.log("Fallback vars written to dist/fallback-vars.css");