import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<h2>Home组件内容</h2>
			<div>
				<ul className="nav nav-tabs" style={{ marginBottom: "10px" }}>
					<li>
						<NavLink className="list-group-item" to="/home/news">
							News
						</NavLink>
					</li>
					<li>
						<NavLink className="list-group-item" to="/home/message">
							Message
						</NavLink>
					</li>
				</ul>
				<Outlet></Outlet>
			</div>
		</>
	);
}
