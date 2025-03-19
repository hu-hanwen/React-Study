import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
	// 获取用户数据
	// getUserData = username => {
	// 	this.setState({ isFirst: false, isLoading: true });
	// 	axios.get(`https://api.github.com/search/users?q=${username}`).then(
	// 		response => {
	// 			this.setState({
	// 				userData: response.data.items,
	// 			});
	// 			this.setState({ isFirst: false, isLoading: false });
	// 		},
	// 		error => {
	// 			this.setState({ isFirst: false, isLoading: false, errorInfo: error.message });
	// 		},
	// 	);
	// };

	render() {
		return (
			<div className="container">
				<Search></Search>
				<List></List>
			</div>
		);
	}
}
