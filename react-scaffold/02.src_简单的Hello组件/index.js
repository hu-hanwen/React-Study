/** 该文件是入口文件  */

// 引入React
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";

// 引入App根组件
import App from "./App";
// 新版本的创建方式
const root = ReactDOM.createRoot(document.getElementById("root"));

// 渲染App组件
root.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>,
);
