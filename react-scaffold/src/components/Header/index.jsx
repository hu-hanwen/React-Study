import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
	state = {
		// 任务名称
		taskName: "",
	};

	saveTaskName = event => {
		this.setState({
			taskName: event.target.value,
		});
	};

	render() {
		return (
			<div className="todo-header">
				<input type="text" onChange={this.saveTaskName} placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		);
	}
}
