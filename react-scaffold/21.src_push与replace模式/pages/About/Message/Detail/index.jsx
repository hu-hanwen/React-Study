import React, { Component } from "react";
import qs from "query-string";

const detailData = [
	{ id: "001", content: "英雄联盟" },
	{ id: "002", content: "红色警戒" },
	{ id: "003", content: "我的世界" },
];

export default class Detail extends Component {
	render() {
		// console.log(this.props);

		// 接收params参数
		// const { id, title } = this.props.match.params;

		// 接收search参数
		// const searchParams = this.props.location.search;
		// const { id, title } = qs.parse(searchParams);

		// 接收state参数
		const { id, title } = this.props.location.state || {};

		const { content } = detailData.find(item => item.id === id) || {};
		return (
			<ul>
				<li>ID：{id}</li>
				<li>TITLE：{title}</li>
				<li>CONTENT：{content}</li>
			</ul>
		);
	}
}
