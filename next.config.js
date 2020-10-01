/** @format */

module.exports = {
	env: {
		pageName: "MROCZKOWSKI",
	},
	//WŁĄCZA STRICT MODE REACTA FOR ALL PAGES
	reactStrictMode: true,
	//DODAJE TRAILING SLASH NA NA KONCU URL
	trailingSlash: false,
	//USTAWIONE NA TRUE IGNORUJE BŁEDY WYNIKAJACE ZE SPRAWDZANIA TYPESCRIPT
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: false,
	},

	//DODAJE PREFIX DO ADRESU URL
	basePath: "/Mroczkowski",
	async rewrites() {
		return [
			{
				source: "/api",
				destination: "http://localhost:5000/Multikino/Movies",
			},
		];
	},
	async redirects() {
		return [
			{
				source: "/about",
				destination: "/",
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: "/api",
				headers: [
					{
						key: "x-custom-header",
						value: "my custom header value",
					},
					{
						key: "x-another-custom-header",
						value: "my other custom header value",
					},
				],
			},
		];
	},
};
