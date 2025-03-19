import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

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
							{/* 原生实现 */}
							{/* <a className="list-group-item" href="./about.html">
								About
							</a>
							<a className="list-group-item active" href="./home.html">
								Home
							</a> */}

							{/* react中实现 */}
							<Link className="list-group-item" to="/home">
								Home
							</Link>
							<Link className="list-group-item active" to="/about">
								About
							</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Route path="/home" component={Home}></Route>
								<Route path="/about" component={About}></Route>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
