import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import FullReload from 'vite-plugin-full-reload'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
	build: {
		target: 'es2022',
		outDir: 'dist',
		assetsDir: 'assets'
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@partials': resolve(__dirname, 'src/html-partials')
		}
	},

	base: './',
	server: {
		port: 3025,
		host: '0.0.0.0',
		hmr: true,
		allowedHosts: ['16f1-188-130-177-205.ngrok-free.app']
	},

	plugins: [
		injectHTML(),
		handlebars({
			reloadOnPartialChange: true,
			partialDirectory: resolve(__dirname, 'src/html-partials'),
			context: {
				baseUrl: '/sponsor-stories/'
			}
		}),

		FullReload('src/html-partials/**/*', { delay: 0 }),

		viteStaticCopy({
			targets: [
				{
					src: 'src/assets/*',
					dest: 'assets'
				}
			]
		})
	]
})
