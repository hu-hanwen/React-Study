import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import "./index.css";
import { increment, decrement, incrementAsync } from "../../redux/actions/count";

class Count extends Component {
	selectEle = createRef();

	increment = () => {
		const value = this.selectEle.current.value;
		this.props.increment(Number(value));
	};

	decrement = () => {
		const value = this.selectEle.current.value;
		this.props.decrement(Number(value));
	};

	incrementOdd = () => {
		const { count, increment } = this.props;
		const value = this.selectEle.current.value;
		if (count % 2) {
			increment(Number(value));
		}
	};

	incrementAsync = () => {
		const value = this.selectEle.current.value;
		this.props.incrementAsync(Number(value), 1000);
	};

	render() {
		const { count, personSum } = this.props;

		return (
			<div className="count">
				<h2>
					我是Count组件，Person组件中的人数为：<span className="person-sum">{personSum}</span>
				</h2>
				<h3>当前求和为：{count}</h3>
				<select ref={this.selectEle}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.incrementOdd}>奇数加</button>
				<button onClick={this.incrementAsync}>等一等再加</button>
			</div>
		);
	}
}

export default connect(
	state => ({ count: state.count, personSum: state.personList.length }), //
	{ increment, decrement, incrementAsync },
)(Count);
