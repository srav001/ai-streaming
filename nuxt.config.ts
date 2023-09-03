// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	runtimeConfig: {
		openAiKey: process.env.OPENAI_API_KEY
	}
});
