import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
	state = {
		// 标识是否初次展示
		isFirst: true,
		// 标识是否加载中
		isLoading: false,
		// 搜索回来的用户数据
		userData: [],
		// 存储错误信息
		errorInfo: "",
	};

	// 组件挂载后订阅消息（接收数据）
	componentDidMount() {
		this.token = PubSub.subscribe("updateListState", (_, data) => {
			this.setState(data);
		});
	}

	// 组件卸载之前退订消息（取消订阅）
	componentWillUnmount() {
		PubSub.unsubscribe(this.token);
	}

	render() {
		const { isFirst, isLoading, userData, errorInfo } = this.state;

		return (
			<div className="row">
				{isFirst ? (
					<h3>欢迎使用。请输入用户名进行搜索。</h3>
				) : isLoading ? (
					<h3>正在加载中...</h3>
				) : errorInfo ? (
					<h3 style={{ color: "red" }}>{errorInfo}</h3>
				) : (
					userData.map(userItem => {
						return (
							<div className="card" key={userItem.id}>
								<a href={userItem.html_url} target="_blank">
									<img src={userItem.avatar_url} style={{ width: "100px" }} />
								</a>
								<p className="card-text">{userItem.login}</p>
							</div>
						);
					})
				)}
			</div>
		);
	}
}
