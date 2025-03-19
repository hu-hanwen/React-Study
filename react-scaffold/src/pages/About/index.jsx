import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";

export default class About extends Component {
	render() {
		return (
			<div>
				<h2>我是About组件的内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/about/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/about/message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/about/news" component={News}></Route>
						<Route path="/about/message" component={Message}></Route>
						<Redirect to="/about/news"></Redirect>
					</Switch>
				</div>
			</div>
		);
	}
}
