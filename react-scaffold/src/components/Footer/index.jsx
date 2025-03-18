import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
	handlerAllCheck = event => {
		const { handlerIsAllCheck } = this.props;
		handlerIsAllCheck(event.target.checked);
	};

	handlerClearTask = () => {
		if (window.confirm("确定要清除已完成任务吗？")) {
			const { clearDoneTask } = this.props;
			clearDoneTask();
		}
	};

	render() {
		const { taskList } = this.props;

		// 已完成数量
		const doneTaskSum = taskList.reduce((pre, current) => pre + (current.isDone ? 1 : 0), 0);
		// 全部数量
		const allTaskSum = taskList.length;

		// 全选/全不选框状态
		const isAllChecked = doneTaskSum === allTaskSum && allTaskSum;

		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={isAllChecked} onChange={this.handlerAllCheck} />
				</label>
				<span>
					<span>已完成{doneTaskSum}</span> / 全部{allTaskSum}
				</span>
				<button className="btn btn-danger" onClick={this.handlerClearTask}>
					清除已完成任务
				</button>
			</div>
		);
	}
}
