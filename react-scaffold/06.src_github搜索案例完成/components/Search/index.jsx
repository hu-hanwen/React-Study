import React, { Component } from "react";

export default class Search extends Component {
	handlerSearch = () => {
		const { value: keyword } = this.inputEle;
		if (!keyword) {
			alert("请输入用户名！");
			return;
		}
		this.props.getUserData(keyword);
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
