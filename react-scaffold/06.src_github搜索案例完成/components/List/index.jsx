import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
	render() {
		const { isFirst, isLoading, userData, errorInfo } = this.props;

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
