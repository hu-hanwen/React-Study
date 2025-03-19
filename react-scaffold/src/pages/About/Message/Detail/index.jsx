import React, { Component } from "react";

const detailData = [
	{ id: "001", content: "英雄联盟" },
	{ id: "002", content: "红色警戒" },
	{ id: "003", content: "我的世界" },
];

export default class Detail extends Component {
	render() {
		// console.log(this.props);
		const { id, title } = this.props.match.params;
		const { content } = detailData.find(item => item.id === id);
		return (
			<ul>
				<li>ID：{id}</li>
				<li>TITLE：{title}</li>
				<li>CONTENT：{content}</li>
			</ul>
		);
	}
}
