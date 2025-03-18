import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
	render() {
		const { taskList, updateTaskItem } = this.props;

		return (
			<ul className="todo-main">
				{taskList.map(taskItem => {
					// 自己比较熟悉的写法（偏向于Vue）
					// return <Item taskItem={taskItem} key={taskItem.id}></Item>;

					// React中写法
					return <Item {...taskItem} key={taskItem.id} updateTaskItem={updateTaskItem}></Item>;
				})}
			</ul>
		);
	}
}
