import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
	// 获取已完成任务数量
	getDoneNumber = () => {
		const { taskList } = this.props;
		return taskList.reduce((pre, current) => {
			return pre + (current.isDone ? 1 : 0);
		}, 0);
	};

	render() {
		const { taskList } = this.props;

		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" />
				</label>
				<span>
					<span>已完成{this.getDoneNumber()}</span> / 全部{taskList.length}
				</span>
				<button className="btn btn-danger">清除已完成任务</button>
			</div>
		);
	}
}
