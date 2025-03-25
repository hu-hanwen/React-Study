import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

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
	},
];
