const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api", // 请求前缀
		createProxyMiddleware({
			target: "http://localhost:5000", // 请求转发给谁就写谁（哪个服务器）
			changeOrigin: true, // 控制服务器收到的请求中的请求头Host的值
			pathRewrite: {
				// 路径重写
				"^/api": "",
			},
		}),
	);
};
