import { defineConfig } from 'unocss'
import presetWind4 from "@unocss/preset-wind4";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
    presets: [
        presetWind4({
            color: { mode: "rgb" },
        }),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
        }),
    ],
    content: {
        pipeline: {
            include: [
                // the default
                /\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|html)($|\?)/,
                // include js/ts files
                'src/**/*.{js,ts}',
            ],
            // exclude files
            // exclude: []
        },
    },
})