import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
	const [sum, setSum] = useState(1);

	return (
		<>
			<h2>我是Home组件</h2>
			<h3>sum的值为：{sum}</h3>
			<button onClick={() => setSum(2)}>sum的值变为2</button>
			{sum === 2 ? <Navigate to="/about"></Navigate> : null}
		</>
	);
}
