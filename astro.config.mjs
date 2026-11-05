import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { google } from "astro/fonts";

export default defineConfig({
    output: "server",
    site: "https://prepperslop.com",
    adapter: cloudflare(),
    integrations: [
        react(),
        emdash({
            database: d1({ binding: "DB" }),
            storage: r2({ binding: "MEDIA" }),
        }),
    ],
    fonts: [
        {
            cssVariable: "--font-body",
            provider: google({
                families: ["Noto Sans:400,600,700"]
            })
        },
        {
            cssVariable: "--font-mono",
            provider: google({
                families: ["Noto Sans Mono:400"]
            })
        }
    ],
    devToolbar: { enabled: false },
});
