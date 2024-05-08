import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  esbuild: {
jsxFactory: 'jsx',
jsxInject: "import jsx from '@/jsx.js'"
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 90,
      },
      png: {
        quality: 90,
      },
      webp: {
        quality: 90,
      },
      avif: {
        quality: 80,
      },
    }),
  ],
});

// import { defineConfig } from "vite";
// import autoprefixer from "autoprefixer";
// import Legacy from "@vitejs/plugin-legacy";

// export default defineConfig({
//   plugins: [
//     Legacy({
//       targets: ["defaults", "not IE 11"],
//     }),
//   ],
//   css: {
//     preprocessorOptions: {
//       scss: {},
//     },
//     postcss: {
//       plugins: [autoprefixer()],
//     },
//   },
// });
