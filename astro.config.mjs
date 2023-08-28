import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gvobot.app/",
  redirects: {
    "/invite": "https://discord.com/api/oauth2/authorize?client_id=1127781120000397402&permissions=10432408972535&scope=bot%20applications.commands",
    "/discord": "https://discord.gg/ryWtHGVUte",
    "/blog": "https://blog.gvobot.app",
    "/github": "https://github.com/gvobot",
    "/kofi": "https://ko-fi.com/duckodas",
    "/paypal": "https://paypal.me/sapphiredevs"
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
