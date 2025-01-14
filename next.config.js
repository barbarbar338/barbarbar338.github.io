/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "en",
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"api.338.rocks",
			"jqetijvmergeabbsbhjm.supabase.co",
		],
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/barbarbar338",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/ben_baris.d",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/@barbarbar338",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/BjEJFwh",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
