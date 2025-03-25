import React, { useState, createContext } from "react";
import "./index.css";

const MyContext = createContext();

export default function A() {
	const [carName, setPerson] = useState("哈弗");
	console.log("A --- render");

	function changeCarName() {
		setPerson("坦克");
	}

	return (
		<div className="parent">
			<h2>我是A组件</h2>
			<h3>
				{carName} <br />
				<button onClick={changeCarName}>修改车名称</button>
				<B carName={carName}></B>
			</h3>
		</div>
	);
}

function B() {
	console.log("B --- render");

	return (
		<div className="child">
			<h2>我是B组件</h2>
			{/* <h3>{props.carName}</h3> */}
		</div>
	);
}
