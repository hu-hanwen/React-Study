import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";

export default [
	{
		path: "/",
		element: <Navigate to="/about" replace></Navigate>,
	},
	{
		path: "/about",
		element: <About></About>,
	},
	{
		path: "/home",
		element: <Home></Home>,
		// element: <Navigate to="/home/news" replace />,
		children: [
			{
				path: "", // 默认子路由
				element: <Navigate to="news" replace />, // 重定向到 /home/news
			},
			{
				path: "news",
				element: <News></News>,
			},
			{
				path: "message",
				element: <Message></Message>,
			},
		],
	},
];
