import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<NavLink className="list-group-item" activeclassname="active" to="/home">
								Home
							</NavLink>
							<NavLink className="list-group-item" activeclassname="active" to="/about">
								About
							</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Suspense fallback={<div>Loading...</div>}>
									<Route path="/home" component={Home}></Route>
									<Route path="/about" component={About}></Route>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
