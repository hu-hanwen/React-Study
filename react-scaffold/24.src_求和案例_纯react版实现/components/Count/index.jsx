import React, { Component, createRef } from "react";
import "./index.css";

export default class Count extends Component {
	selectEle = createRef();

	state = {
		count: 0,
	};

	// 加
	increment = () => {
		const { count } = this.state;
		const { value } = this.selectEle.current;
		this.setState({
			count: count + Number(value),
		});
	};

	// 减
	decrement = () => {
		const { count } = this.state;
		const { value } = this.selectEle.current;
		this.setState({
			count: count - Number(value),
		});
	};

	// 奇数再加
	incrementOdd = () => {
		const { count } = this.state;
		const { value } = this.selectEle.current;
		if (Number(count) % 2) {
			this.setState({
				count: count + Number(value),
			});
		}
	};

	// 等一等再加
	incrementWait = () => {
		const { count } = this.state;
		const { value } = this.selectEle.current;
		setTimeout(() => {
			this.setState({
				count: count + Number(value),
			});
		}, 1000);
	};

	render() {
		const { count } = this.state;

		return (
			<div>
				<h2>当前求和为：{count}</h2>
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
}
