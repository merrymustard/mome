import React, {Component} from "react";
import { MyContext } from "../context";


export default class NavProfileSide extends Component {
	showSettings (event) {
		event.preventDefault();
	}
	render(){
  return (
    <MyContext.Consumer>
      {context => (
				<h1>hu</h1>
      )}
    </MyContext.Consumer>
	);
}
}





