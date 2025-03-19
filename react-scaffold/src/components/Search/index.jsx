import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
	handlerSearch = () => {
		const { value: keyword } = this.inputEle;
		if (!keyword) {
			alert("请输入用户名！");
			return;
		}
		// 发布消息（触发回调）
		PubSub.publish("updateListState", { isFirst: false, isLoading: true });
		axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
			// 成功的回调
			({ data: { items } }) => {
				// 发布消息
				PubSub.publish("updateListState", { isFirst: false, isLoading: false, userData: items, errorInfo: "" });
			},
			// 失败的回调
			error => {
				PubSub.publish("updateListState", { isFirst: false, isLoading: false, userData: [], errorInfo: error.message });
			},
		);
	};

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input type="text" ref={inputEle => (this.inputEle = inputEle)} placeholder="请输入用户名称" />
					&nbsp;
					<button onClick={this.handlerSearch}>搜索</button>
				</div>
			</section>
		);
	}
}
