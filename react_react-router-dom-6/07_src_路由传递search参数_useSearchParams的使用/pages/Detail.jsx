import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Detail() {
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id");
	const title = searchParams.get("title");
	const content = searchParams.get("content");

	return (
		<ul>
			<li>消息ID：{id}</li>
			<li>消息标题：{title}</li>
			<li>消息内容：{content}</li>
		</ul>
	);
}
