// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook'],
  vite: {
    optimizeDeps: {
      include: ['storybook > @storybook/core > jsdoc-type-pratt-parser'],
    },
  },
})