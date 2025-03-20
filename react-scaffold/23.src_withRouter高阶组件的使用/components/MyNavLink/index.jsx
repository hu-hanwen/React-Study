import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
	render() {
		// console.log(this.props);
		/**
		 * 组件标签中间书写的内容，相当于给该组件传递了props，props的key为children(react内部固定的)
		 * children的value就是标签中间的内容
		 */
		return <NavLink className="list-group-item" activeClassName="active" {...this.props}></NavLink>;
	}
}
