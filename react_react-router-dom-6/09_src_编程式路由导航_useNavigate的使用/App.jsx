import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";

export default function App() {
	const element = useRoutes(routes);

	return (
		<>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<Header></Header>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						<NavLink className="list-group-item" to="/about">
							About
						</NavLink>
						<NavLink className="list-group-item" to="/home">
							Home
						</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* <Routes>
								<Route path="/about" element={<About></About>}></Route>
								<Route path="/home" element={<Home></Home>}></Route>
								<Route path="/" element={<Navigate to="/about" replace></Navigate>}></Route>
							</Routes> */}
							{element}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
