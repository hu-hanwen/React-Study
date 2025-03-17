import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
	handlerKeyUp = event => {
		const { keyCode, target } = event;
		// 判断按键是否为回车键
		if (keyCode !== 13) return;
		// 判断输入框内容是否为空
		if (!target.value.trim()) {
			alert("任务不能为空！");
			return;
		}
		// 准备一个任务对象
		const taskItem = {
			id: nanoid(),
			taskName: target.value.trim(),
			isDone: false,
		};
		// 调用父组件的addTask方法
		this.props.addTask(taskItem);
		// 清空输入框
		target.value = "";
	};

	render() {
		return (
			<div className="todo-header">
				<input type="text" onKeyUp={this.handlerKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
			</div>
		);
	}
}
