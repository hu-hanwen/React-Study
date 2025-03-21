import React, { Component, createRef } from "react";
import "./index.css";
export default class Count extends Component {
	selectEle = createRef();

	// 加
	increment = () => {
		const { value } = this.selectEle.current;
		const { increment } = this.props;
		increment(Number(value));
	};

	// 减
	decrement = () => {
		const { value } = this.selectEle.current;
		const { decrement } = this.props;
		decrement(Number(value));
	};

	// 奇数再加
	incrementOdd = () => {
		const { value } = this.selectEle.current;
		const { count, increment } = this.props;
		if (count % 2) {
			increment(Number(value));
		}
	};

	// 等一等再加
	incrementWait = () => {
		const { value } = this.selectEle.current;
		const { incrementAsync } = this.props;
		incrementAsync(Number(value), 1000);
	};

	render() {
		const { count } = this.props;

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
