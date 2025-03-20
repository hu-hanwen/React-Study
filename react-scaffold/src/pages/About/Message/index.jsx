import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
import "./index.css";

const MessageData = [
	{ id: "001", message: "message-001" },
	{ id: "002", message: "message-002" },
	{ id: "003", message: "message-003" },
];

export default class Message extends Component {
	pushShow = (id, title) => {
		return () => {
			// 编程式路由导航 - push - 传递params参数
			// this.props.history.push(`/about/message/detail/${id}/${title}`);

			// 编程式路由导航 - push - 传递search参数
			// this.props.history.push(`/about/message/detail?id=${id}&title=${title}`);

			// 编程式路由导航 - push - 传递state参数
			this.props.history.push({
				pathname: "/about/message/detail",
				state: { id, title },
			});
		};
	};

	replaceShow = (id, title) => {
		return () => {
			// 编程式路由导航 - replace - 传递params参数
			// this.props.history.replace(`/about/message/detail/${id}/${title}`);

			// 编程式路由导航 - replace - 传递search参数
			// this.props.history.replace(`/about/message/detail?id=${id}&title=${title}`);

			// 编程式路由导航 - replace - 传递state参数
			this.props.history.replace({
				pathname: "/about/message/detail",
				state: { id, title },
			});
		};
	};

	forWard = () => {
		this.props.history.goForward();
	};

	back = () => {
		this.props.history.goBack();
	};

	go = () => {
		this.props.history.go(2);
	};

	render() {
		return (
			<div>
				<ul>
					{MessageData.map(messageItem => {
						const { id, message } = messageItem;
						return (
							<li key={id} className="li-box">
								{/* 路由传递params参数 */}
								{/* <Link to={`/about/message/detail/${id}/${message}`}>{message}</Link> */}

								{/* 路由传递search参数 */}
								{/* <Link to={`/about/message/detail?id=${id}&title=${message}`}>{message}</Link> */}

								{/* 路由传递state参数 */}
								<Link replace to={{ pathname: "/about/message/detail", state: { id, title: message } }}>
									{message}
								</Link>

								{/* 使用编程式路由导航实现跳转 */}
								<button className="box" onClick={this.pushShow(id, message)}>
									push查看
								</button>
								<button className="box" onClick={this.replaceShow(id, message)}>
									replace查看
								</button>
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

				<button onClick={this.forWard} className="box">
					前进
				</button>
				<button onClick={this.back} className="box">
					后退
				</button>
				<button onClick={this.go} className="box">
					go
				</button>
			</div>
		);
	}
}
