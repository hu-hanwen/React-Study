import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
	handlerCheck = currentId => {
		return event => {
			const { checked } = event.target;
			const { updateTaskItem } = this.props;
			updateTaskItem(currentId, checked);
		};
	};

	render() {
		const { id, taskName, isDone } = this.props;

		return (
			<li>
				<label>
					<input type="checkbox" defaultChecked={isDone} onChange={this.handlerCheck(id)} />
					<span>{taskName}</span>
				</label>
				<button className="btn btn-danger" style={{ display: "none" }}>
					删除
				</button>
			</li>
		);
	}
}
