import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends Component {
	// 初始化数据
	state = {
		taskList: [
			{ id: "001", taskName: "学习React", isDone: false },
			{ id: "002", taskName: "学习微信小程序", isDone: false },
			{ id: "003", taskName: "学习Vue", isDone: true },
		],
	};

	// 添加新任务
	addTask = newTaskItem => {
		const { taskList } = this.state;
		this.setState({
			taskList: [newTaskItem, ...taskList],
		});
	};

	// 更新任务
	updateTaskItem = (currentId, isChecked) => {
		const { taskList } = this.state;
		taskList.forEach(taskItem => {
			if (taskItem.id === currentId) {
				taskItem.isDone = isChecked;
			}
		});
		this.setState({
			taskList,
		});
	};

	render() {
		const { taskList } = this.state;

		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTask={this.addTask}></Header>
					<List taskList={taskList} updateTaskItem={this.updateTaskItem}></List>
					<Footer taskList={taskList}></Footer>
				</div>
			</div>
		);
	}
}
