const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `http://localhost:5000/api/:path*`
			},
			{
				source: "/uploads/:path*",
				destination: `http://localhost:5000/uploads/:path*`
			}
		]
	}
}
module.exports = {
	images: {
		domains: ["st.kp.yandex.net"]
	}
}
module.exports = nextConfig
