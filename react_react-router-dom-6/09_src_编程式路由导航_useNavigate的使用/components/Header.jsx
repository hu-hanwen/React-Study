import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	function back() {
		navigate(-1);
	}
	function forward() {
		navigate(1);
	}

	return (
		<div className="page-header">
			<h2>React Router Demo</h2>
			<button onClick={back} style={{ marginRight: "6px" }}>
				⬅️后退
			</button>
			<button onClick={forward}>前进➡️</button>
		</div>
	);
}
