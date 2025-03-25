import React, { useState, createContext } from "react";
import "./index.css";

const MyContext = createContext();

export default function A() {
	const [person, setPerson] = useState({ name: "张三", age: 18 });

	return (
		<div className="parent">
			<h2>我是A组件</h2>
			<h3>
				姓名：{person.name}，年龄：{person.age}
			</h3>
			<MyContext.Provider value={person}>
				<B></B>
			</MyContext.Provider>
		</div>
	);
}

function B() {
	return (
		<div className="child">
			<h2>我是B组件</h2>
			<div></div>
			<C></C>
		</div>
	);
}

function C() {
	return (
		<div className="grandson">
			<h2>我是C组件</h2>
			<MyContext.Consumer>
				{value => {
					return (
						<h3>
							姓名：{value.name}，年龄：{value.age}
						</h3>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
}
