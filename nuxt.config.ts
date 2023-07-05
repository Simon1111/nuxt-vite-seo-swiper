// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
	runtimeConfig: {
		public: {
			API_YOUR_API: process.env.API_YOUR_API,
		}
	},
	app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
			meta: [{
				name: 'theme-color',
				content: '#6F6F6F'
			},{
				name: 'author',
				content: 'ss-web - Simon Lazarev'
			},{
				property: 'og:url',
				content: 'you.url'
			},{
				property: 'og:type',
				content: 'website'
			},{
				property: 'og:image',
				content: '/you-iamge.jpg'
			},{
				property: 'og:locale',
				content: 'en_US'
			},{
				name: 'og:site_name',
				content: 'Site-name'
			},{
				name: 'twitter:card',
				content: 'summary'
			},{
				name: 'twitter:image',
				content: '/you-iamge.jpg'
			},{
				name: 'twitter:image:alt',
				content: 'Site-name'
			}],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
    }
  },
	css: [
		'@/assets/styles/reset.scss',
		'@/assets/styles/main.scss',
	],
	modules: ['@pinia/nuxt','nuxt-swiper'],
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	nitro: {
		plugins: ['~/nitro/analitics.ts']
	},
	vite: {
		server: { hmr: { overlay: false }, },
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/_variables.scss";',
				},
			},
		},
	}
})
