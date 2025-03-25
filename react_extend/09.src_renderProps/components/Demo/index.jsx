import React, { useState } from "react";
import "./index.css";

export default function A() {
	const [carName, setPerson] = useState("哈弗");

	function changeCarName() {
		setPerson("坦克");
	}

	return (
		<div className="parent">
			<h2>我是A组件</h2>
			<B render={x => <C x={x} />}></B>
		</div>
	);
}

function B(props) {
	const [x] = useState(100);

	return (
		<div className="child">
			<h2>我是B组件</h2>
			{props.render(x)}
		</div>
	);
}

function C(props) {
	return (
		<div className="grandson">
			<h2>我是C组件</h2>
			<h3>{props.x}</h3>
		</div>
	);
}
