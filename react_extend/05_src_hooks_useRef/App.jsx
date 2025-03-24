import React, { Component, useState, useEffect, useRef } from "react";

/* 类式组件 */
// export default class App extends Component {
// 	state = {
// 		count: 0,
// 	};

// 	increment = () => {
// 		const { count } = this.state;
// 		this.setState({
// 			count: count + 1,
// 		});
// 	};

// 	render() {
// 		const { count } = this.state;

// 		return (
// 			<div>
// 				<h2>当前求和为：{count}</h2>
// 				<button onClick={this.increment}>点击加+1</button>
// 			</div>
// 		);
// 	}
// }

/* 函数式组件 */
export default function App() {
	// useState
	const [count, setCount] = useState(0);
	const [schoolName, setSchoolName] = useState("尚硅谷");

	const inputEle = useRef();

	// useEffect
	/**
	 * useEffect接收两个参数
	 * 1.参数一：回调函数
	 * 2.参数二：数组（理解为配置哪个数据进去后，后期该数据发生变化则参数1的回调函数执行）
	 */

	/**
	 * 如果只传递一个参数，可以理解为：传入的回调函数初始化调用和任意数据更新时调用，理解为didMount、didUpdate
	 * 如果传递两个参数，第一个参数为回调函数，第二个参数为空数组，可以理解为：传入的回调函数初始化调用，理解为didMount
	 * 如果传递两个参数，第一个参数为回调函数，第二个参数为数组，可以理解为：传入的回调函数初始化调用和数组中数据变化时调用，理解为didMount、didUpdate
	 * 传入的第一个参数如果返回一个函数，则该函数返回的是清除函数，该函数会在组件卸载时执行，理解为willUnmount
	 */
	useEffect(() => {
		let timer = setInterval(() => {
			setCount(count + 1);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [count]);

	const increment = () => {
		setCount(count + 1);
	};

	function changeSchoolName() {
		setSchoolName(schoolName + "@");
	}

	function showInfo() {
		alert(inputEle.current.value);
	}

	return (
		<div>
			<h2>当前求和为：{count}</h2>
			<button onClick={increment}>点击加+1</button>
			<h2>学校名称为：{schoolName}</h2>
			<button onClick={changeSchoolName}>修改学校名称</button>
			<br />
			<input type="text" ref={inputEle} placeholder="请输入" />
			<br />
			<button onClick={showInfo}>提示输入的信息</button>
		</div>
	);
}
