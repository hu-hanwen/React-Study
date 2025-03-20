import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";

class Header extends Component {
	forWard = () => {
		this.props.history.goForward();
	};

	back = () => {
		this.props.history.goBack();
	};

	go = () => {
		this.props.history.go(2);
	};

	render() {
		// console.log("Header组件中收到的props", this.props);
		return (
			<div className="col-xs-offset-2 col-xs-8">
				<div className="page-header">
					<h2>React Router Demo</h2>
					<button onClick={this.forWard}>非路由组件-前进</button>
					<button onClick={this.back}>非路由组件-后退</button>
					<button onClick={this.go}>非路由组件-go</button>
				</div>
			</div>
		);
	}
}

/**
 * 使用withRouter高阶组件，参数接收一个非路由组件，返回一个非路由组件
 * 返回的组件身上会拥有路由组件的三个属性，history、location、matcht
 * 使得非路由组件可以访问路由组件的三个属性
 */

export default withRouter(Header);
