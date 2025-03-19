import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<Header></Header>
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
							{/* <NavLink className="list-group-item" activeClassName="active" to="/home">
								Home
							</NavLink>
							<NavLink className="list-group-item" activeClassName="active" to="/about">
								About
							</NavLink> */}

							{/* 使用二次封装的NavLink */}
							<MyNavLink to="/home">Home</MyNavLink>
							<MyNavLink to="/about">About</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									{/* Switch内置组件作用：只匹配一个路由 */}
									<Route exact path="/home" component={Home}></Route>
									<Route exact path="/about" component={About}></Route>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
