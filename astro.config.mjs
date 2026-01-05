// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true
        }
    },
    env: {
        schema: {
            PUBLIC_GA_MEASUREMENT_ID: {
                context: "client",
                access: "public",
                type: "string",
                default: 'G-G0SKFG01NH'
            }
        }
    }
});
