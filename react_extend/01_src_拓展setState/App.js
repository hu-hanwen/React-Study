import React, { Component } from "react";

export default class App extends Component {
	state = {
		count: 0,
	};

	increment = () => {
		/**
		 * 修改状态第一种写法：
		 * setState()方法接收两个参数，第一个参数为修改后的状态对象，第二个参数为回调函数
		 * setState()方法修改状态是异步的，所以不能在修改状态后直接使用修改后的状态
		 * setState()方法修改状态后，会执行回调函数，回调函数中可以获取到修改后的状态
		 */
		// const { count } = this.state;

		// this.setState(
		// 	{
		// 		count: count + 1,
		// 	},
		// 	() => {
		// 		console.log(this.state.count);
		// 	},
		// );
		// console.log(this.state.count);

		/**
		 * 修改状态第二种写法：
		 */
		this.setState(
			// state 为当前状态，props 为当前组件的 props
			(state, props) => {
				return {
					count: state.count + 1,
				};
			},
			() => {
				// 此处可以获取到最新的值
				console.log(this.state.count);
			},
		);
	};

	render() {
		const { count } = this.state;

		return (
			<div>
				<h2>当前求和为：{count}</h2>
				<button onClick={this.increment}>点击+1</button>
			</div>
		);
	}
}
