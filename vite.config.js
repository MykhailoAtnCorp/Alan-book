import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import FullReload from 'vite-plugin-full-reload'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import injectHTML from 'vite-plugin-html-inject'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
	build: {
		target: 'es2022',
		outDir: 'dist',
		assetsDir: 'assets',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				'step-character': resolve(__dirname, 'step-character.html')
			},
			output: {
				entryFileNames: (chunk) => {
					const name = chunk.name.replace(/\.js$/, '')
					return `assets/${name}.js`
				},
				chunkFileNames: 'assets/chunks/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.')
					const extType = info[info.length - 1]

				
					if (extType === 'css') {
				
						let name = 'style' 

				
						if (assetInfo.name.includes('main')) {
							name = 'main'
						} else if (assetInfo.name.includes('step-character')) {
							name = 'step-character'
						}

						return `assets/${name}.css`
					}

				
					return 'assets/[name][extname]'
				},
				manualChunks: {}
			}
		},
		cssCodeSplit: true
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
		allowedHosts: ['5594-188-130-177-205.ngrok-free.app']
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
		}),
		createHtmlPlugin({
			minify: false,
			pages: [
				{
					entry: 'src/js/main.js',
					filename: 'index.html',
					template: 'index.html'
				},
				{
					entry: 'src/js/step-character.js',
					filename: 'step-character.html',
					template: 'step-character.html'
				}
			]
		})
	]
})
