import React, { Component, createRef } from "react";
import "./index.css";
export default class Count extends Component {
	selectEle = createRef();

	// 加
	increment = () => {
		const { value } = this.selectEle.current;
	};

	// 减
	decrement = () => {
		const { value } = this.selectEle.current;
	};

	// 奇数再加
	incrementOdd = () => {
		const { value } = this.selectEle.current;
	};

	// 等一等再加
	incrementWait = () => {
		const { value } = this.selectEle.current;
	};

	render() {
		return (
			<div>
				<h2>当前求和为：？？？</h2>
				<select ref={this.selectEle}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.incrementOdd}>奇数再加</button>
				<button onClick={this.incrementWait}>等一等再加</button>
			</div>
		);
	}

	// componentDidMount() {
	// 	// 订阅数据变化
	// 	// 可以理解为redux中每一次发生变化都会执行此方法，执行此方法用来更新界面
	// 	store.subscribe(() => {
	// 		this.setState({});
	// 	});
	// }
}
