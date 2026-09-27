import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import react from "@astrojs/react";
import emdash from "emdash/astro";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { fontProviders } from "astro:fonts";

export default defineConfig({
    output: "server",
    site: "https://prepperslop.com",
    adapter: cloudflare(),
    cache: {
        provider: cacheCloudflare(),
    },
    routeRules: {
        "/": { maxAge: 300, swr: 86400 },
    },
    integrations: [
        react(),
        emdash({
            database: d1({ binding: "DB" }),
            storage: r2({ binding: "MEDIA" }),
        }),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "JetBrains Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			fallbacks: ["monospace"],
		},
	],
	devToolbar: { enabled: false },
});
