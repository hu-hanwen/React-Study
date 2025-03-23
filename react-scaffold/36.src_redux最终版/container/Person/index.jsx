import React, { Component, createRef } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";
import "./index.css";

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
		const personItem = { id: nanoid(), name, age: Number(age) };
		this.props.addPerson(personItem);
		this.inputNameEle.current.value = "";
		this.inputAgeEle.current.value = "";
	};

	render() {
		const { personList, count } = this.props;

		return (
			<div className="person">
				<h2>
					我是Person组件，Count组件的求和为：<span className="count">{count}</span>
				</h2>
				<input ref={this.inputNameEle} type="text" placeholder="请输入姓名" />
				<input ref={this.inputAgeEle} type="text" placeholder="请输入年龄" />
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{personList.map(item => {
						return (
							<li key={item.id}>
								{item.name} -- {item.age}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({ personList: state.personList, count: state.count }), //
	{ addPerson },
)(Person);
