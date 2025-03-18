import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component {
	state = {
		// 搜索回来的用户数据
		userData: [],
		// 标识是否初次展示
		isFirst: true,
		// 标识是否加载中
		isLoading: false,
		// 存储错误信息
		errorInfo: "",
	};

	// 获取用户数据
	getUserData = username => {
		this.setState({ isFirst: false, isLoading: true });
		axios.get(`https://api.github.com/search/users?q=${username}`).then(
			response => {
				this.setState({
					userData: response.data.items,
				});
				this.setState({ isFirst: false, isLoading: false });
			},
			error => {
				this.setState({ isFirst: false, isLoading: false, errorInfo: error.message });
			},
		);
	};

	render() {
		return (
			<div className="container">
				<Search getUserData={this.getUserData}></Search>
				<List {...this.state}></List>
			</div>
		);
	}
}
