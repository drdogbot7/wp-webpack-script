module.exports = {
	// Project Identity
	type: 'plugin', // Plugin or theme
	slug: 'wpackio-plugin', // Plugin or Theme slug, basically the directory name under `wp-content/<themes|plugins>`
	// Used to generate banners on top of compiled stuff
	bannerConfig: {
		name: 'WordPress WebPack Bundler',
		author: 'Swashata Ghosh',
		license: 'GPL-3.0',
		link: 'https://wpack.io',
		version: '1.0.0',
		copyrightText:
			'This software is released under the GPL-3.0 License\nhttps://opensource.org/licenses/GPL-3.0',
		credit: true,
	},
	// Files we need to compile, and where to put
	files: [
		// If this has length === 1, then single compiler
		{
			name: 'app',
			entry: {
				main: ['./src/app/index.js'],
				mobile: ['./src/app/mobile.js'],
			},
			filename: '[name].js',
			// Extra webpack config to be passed directly
			webpackConfig: undefined,
		},
		// If has more length, then multi-compiler
	],
	// Output path relative to the context directory
	// We need relative path here, else, we can not map to publicPath
	outputPath: 'dist',
	// Project specific config
	// Needs react?
	hasReact: true,
	// Needs sass?
	hasSass: true,
	// Externals
	externals: {
		jquery: 'jQuery',
	},
	// Webpack Aliases
	alias: undefined,
	// Show overlay on development
	errorOverlay: true,
	// Auto optimization by webpack
	// Split all common chunks with default config
	// <https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks>
	// Won't hurt because we use PHP to automate loading
	optimizeSplitChunks: true,
	// Usually PHP and other files to watch and reload when changed
	watch: 'inc/**/*.php',
};