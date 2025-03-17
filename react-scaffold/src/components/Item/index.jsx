import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
	render() {
		const { id, taskName, isDone } = this.props;

		return (
			<li>
				<label>
					<input type="checkbox" defaultChecked={isDone} />
					<span>{taskName}</span>
				</label>
				<button className="btn btn-danger" style={{ display: "none" }}>
					删除
				</button>
			</li>
		);
	}
}
