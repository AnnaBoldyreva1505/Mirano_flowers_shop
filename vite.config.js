import { defineConfig } from "vite";


export default defineConfig({
    resolve: {
        alias: {
"@": "/src"
        }
    },
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
