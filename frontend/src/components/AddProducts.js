import React, { Component } from "react";
import { MyContext } from "../context"
import { thisTypeAnnotation } from "@babel/types";



export default class AddProducts extends Component {
	state = {
		stockInputs:[]
	}
	addStockForm(){
		this.setState(state => {
			const list = this.state.stockInputs.push(0);
			return {
				stockInputs:list
			};
	})
}
	render() {
		//EN STATE TIENE QUE SER UN ARRAY
		
	
    return (
      <MyContext.Consumer>
			{context=>(
				<div className="wrapper">
				<form onSubmit={context.addProduct}>
				<input type="text" name="name" onChange={context.handleInput}/>
				<input type="text" name="brand" onChange={context.handleInput}/>
				<input type="text" name="caption" onChange={context.handleInput}/>
				<input type="text" name="price" onChange={context.handleInput}/>
				<input type="text" name="size" onChange={context.handleInput}/>
				<input type="text" name="details" onChange={context.handleInput}/>
				<input type="text" name="" onChange={context.handleInput}/>
				{this.state.stockInputs.map(()=>(<StockInput/>))}
				<button type="submit">Add Product</button>
				</form>
				</div>
				)}
			</MyContext.Consumer>);
  }
}

function StockInput(props){
	return(
		<MyContext.Consumer>
		{context=>(
			<>
			<input name="quantity" type="number" onChange={e => context.handleStockInput(e)}/>
		<input name="color" type="text" onChange={e => context.handleStockInput(e)}/>
		<input name="size" type="text" onChange={e => context.handleStockInput(e)}/>
		<button onClick={this.addStockForm}>+</button>
		</>
		)}
		
		</MyContext.Consumer>
	)
}

module.exports = StockInput;