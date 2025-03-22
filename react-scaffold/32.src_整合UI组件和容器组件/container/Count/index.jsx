import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import "./index.css";
import { incrementAction, decrementAction, incrementAsync } from "../../redux/count_action";

// UI组件
class Count extends Component {
	selectEle = createRef();

	add = () => {
		const { value } = this.selectEle.current;
		const { incrementAction } = this.props;
		incrementAction(Number(value));
	};

	minus = () => {
		const { value } = this.selectEle.current;
		const { decrementAction } = this.props;
		decrementAction(Number(value));
	};

	addIfOdd = () => {
		const { value } = this.selectEle.current;
		const { count, incrementAction } = this.props;
		if (count % 2) {
			incrementAction(Number(value));
		}
	};

	asyncAdd = () => {
		const { value } = this.selectEle.current;
		const { incrementAsync } = this.props;
		incrementAsync(Number(value), 500);
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
				<button onClick={this.add}>+</button>
				<button onClick={this.minus}>-</button>
				<button onClick={this.addIfOdd}>奇数再加</button>
				<button onClick={this.asyncAdd}>等一等再加</button>
			</div>
		);
	}
}

// connect是高阶组件，接受UI组件，返回容器组件
export default connect(
	state => ({ count: state }), // 映射state到props
	{
		incrementAction,
		decrementAction,
		incrementAsync,
	}, // 映射dispatch到props
)(Count);
