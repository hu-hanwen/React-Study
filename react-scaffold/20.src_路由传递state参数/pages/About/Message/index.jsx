import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

const MessageData = [
	{ id: "001", message: "message-001" },
	{ id: "002", message: "message-002" },
	{ id: "003", message: "message-003" },
];

export default class Message extends Component {
	render() {
		return (
			<div>
				<ul>
					{MessageData.map(messageItem => {
						const { id, message } = messageItem;
						return (
							<li key={id}>
								{/* 路由传递params参数 */}
								{/* <Link to={`/about/message/detail/${id}/${message}`}>{message}</Link> */}

								{/* 路由传递search参数 */}
								{/* <Link to={`/about/message/detail?id=${id}&title=${message}`}>{message}</Link> */}

								{/* 路由传递state参数 */}
								<Link to={{ pathname: "/about/message/detail", state: { id, title: message } }}>{message}</Link>
							</li>
						);
					})}
				</ul>
				<hr />
				{/* 接收params参数 */}
				{/* <Route path="/about/message/detail/:id/:title" component={Detail}></Route> */}

				{/* search参数不用接收 */}
				{/* <Route path="/about/message/detail" component={Detail}></Route> */}

				{/* state参数不用接收 */}
				<Route path="/about/message/detail" component={Detail}></Route>
			</div>
		);
	}
}
