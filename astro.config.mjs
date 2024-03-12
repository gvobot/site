import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gvobot.app/",
  redirects: {
    "/invite": "https://discord.com/api/oauth2/authorize?client_id=1127781120000397402&permissions=28582941289719&redirect_uri=https%3A%2F%2Fgvobot.app&scope=bot%20applications.commands",
    "/support": "https://discord.com/invite/ryWtHGVUte",
    "/development": "https://discord.com/invite/ZtHSjcJYfj",
    "/community": "https://discord.com/invite/fmUeWTEjJU",
    "/blog": "https://blog.gvobot.app",
    "/github": "https://github.com/gvobot",
    "/kofi": "https://ko-fi.com/gvobot",
    "/translate": "https://crowdin.com/project/gvobot",
    "/roadmap": "https://github.com/users/duckodas/projects/1",
    "/privacy": "https://github.com/gvobot/discord/wiki/Privacy-Policy",
    "/terms": "https://github.com/gvobot/discord/wiki/Terms-of-Service"
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
