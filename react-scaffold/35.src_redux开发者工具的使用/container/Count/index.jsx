import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import "./index.css";
import { increment, decrement, incrementAsync } from "../../redux/actions/count";

class Count extends Component {
	selectEle = createRef();

	// 加
	increment = () => {
		const { value } = this.selectEle.current;
		this.props.increment(Number(value));
	};

	// 减
	decrement = () => {
		const { value } = this.selectEle.current;
		this.props.decrement(Number(value));
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
		this.props.incrementAsync(Number(value), 1000);
	};

	render() {
		const { count, personSum } = this.props;

		return (
			<div className="count">
				<h2>
					我是Count组件，Person组件总人数为：<span className="personSum">{personSum}</span>
				</h2>
				<h3>当前求和为：{count}</h3>
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

export default connect(
	state => ({ count: state.count, personSum: state.personList.length }), // 映射state到props
	{ increment, decrement, incrementAsync },
)(Count);
