import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import "./index.css";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
	inputNameEle = createRef();
	inputAgeEle = createRef();

	addPerson = () => {
		const name = this.inputNameEle.current.value.trim();
		const age = this.inputAgeEle.current.value.trim();
		if (!name || !age) {
			alert("请输入姓名和年龄");
			return;
		}

		this.props.addPerson({ id: nanoid(), name, age: Number(age) });
		this.inputNameEle.current.value = "";
		this.inputAgeEle.current.value = "";
	};

	render() {
		const { personList, count } = this.props;

		return (
			<div className="person">
				<h2>
					我是Person组件，Count组件当前和为：<span className="count">{count}</span>
				</h2>
				<input ref={this.inputNameEle} type="text" placeholder="请输入名称" />
				<input ref={this.inputAgeEle} type="text" placeholder="请输入年龄" />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{personList.map(personItem => {
						return (
							<li key={personItem.id}>
								{personItem.name} -- {personItem.age}岁
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({ personList: state.personList, count: state.count }), // 映射state到props
	{
		addPerson,
	},
)(Person);
