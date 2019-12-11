import React from "react";
import { MyContext } from "../context";

export default function NavBar(){
	return(
		<MyContext.Consumer>
		{context => (
			<h1>Navbar</h1>
		)}
		</MyContext.Consumer>
	)
}