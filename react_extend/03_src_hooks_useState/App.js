import React, { Component, useState } from "react";

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
	// const [count, setCount] = useState(0);

	// const [schoolName, setSchoolName] = useState("atguigu");

	// const increment = () => {
	// 	setCount(count + 1);
	// };

	// function changeSchoolName() {
	// 	setSchoolName("尚硅谷");
	// }

	const [state, changeState] = useState({ count: 0, schoolName: "atguigu" });
	const { count, schoolName } = state;

	const increment = () => {
		changeState({ ...state, count: count + 1 });
	};

	function changeSchoolName() {
		changeState({ ...state, schoolName: "尚硅谷" });
	}

	return (
		<div>
			<h2>当前求和为：{count}</h2>
			<button onClick={increment}>点击加+1</button>
			<h2>学校名称为：{schoolName}</h2>
			<button onClick={changeSchoolName}>修改学校名称</button>
		</div>
	);
}
