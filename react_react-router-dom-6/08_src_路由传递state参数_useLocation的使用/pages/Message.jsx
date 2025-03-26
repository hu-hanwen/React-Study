import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
	const [messageList] = useState([
		{ id: 1, title: "标题1", content: "锄禾日当午" },
		{ id: 2, title: "标题2", content: "汗滴禾下土" },
		{ id: 3, title: "标题3", content: "谁知盘中餐" },
		{ id: 4, title: "标题4", content: "粒粒皆辛苦" },
	]);

	return (
		<>
			<ul>
				{messageList.map(({ id, title, content }) => {
					return (
						<li key={id}>
							<Link to="detail" state={{ id, title, content }} style={{ cursor: "pointer" }}>
								{content}
							</Link>
						</li>
					);
				})}
			</ul>
			<Outlet></Outlet>
		</>
	);
}
