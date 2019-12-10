import React, { Component } from "react";
import { MyContext } from "../context"
import { AddProdTag, InventoryInput } from "../styledComponents/StyledComps"


export default class AddProducts extends Component {
	
	render() {
		//EN STATE TIENE QUE SER UN ARRAY
		
    return (
      <MyContext.Consumer>
			{context=>(
					<AddProdTag onSubmit={context.addProduct}>
						<h1>Add a new product</h1>
						<label for="name">Nombre del Producto</label>
						<input type="text" name="name" placeholder="name" value={context.newProduct.name}  onChange={e=> context.handleInput(e,"newProduct")}/>
						<label for="brand">Marca</label>
						<input type="text" name="brand" placeholder="brand" value={context.newProduct.brand} onChange={e=> context.handleInput(e,"newProduct")}/>
						<label for="caption">Descripcion corta</label>
						<input type="text" name="caption" placeholder="caption"  value={context.newProduct.caption}  onChange={e=> context.handleInput(e,"newProduct")}/>
						<label for="price">Precio</label>
						<input type="text" name="price" placeholder="price"  value={context.newProduct.price}  onChange={e=> context.handleInput(e,"newProduct")}/>
						<label for="details">Detalles</label>
						<input type="text" name="details" placeholder="details" value={context.newProduct.details}   onChange={e=> context.handleInput(e,"newProduct")}/>
						<label for="category">Categoria</label>
						<div className="categorie-container" onChange={e=> context.handleInput(e,"newProduct")}>
							<input type="radio" name="category"  value="Hombre"   onChange={e=> context.handleInput(e,"newProduct")}/>Hombre
							<br/>
							<input type="radio" name="category"   value="Mujer"  onChange={e=> context.handleInput(e,"newProduct")}/>Mujer
						</div>
					<br/>
						<div className="subcategories-container">
							<label for="subcategory">Tipo de producto</label>
							<div>
								<input type="radio" name="subcategory"  value="Camisas"  onChange={e=> context.handleInput(e,"newProduct")}/>Camisas
								<input type="radio" name="subcategory"  value="Camisetas"  onChange={e=> context.handleInput(e,"newProduct")}/>Camisetas
								<input type="radio" name="subcategory"  value="Accesorios"  onChange={e=> context.handleInput(e,"newProduct")}/>Accesorios	
								<input type="radio" name="subcategory"  value="Faldas"  onChange={e=> context.handleInput(e,"newProduct")}/>Faldas	
								<input type="radio" name="subcategory"  value="Pantalones"  onChange={e=> context.handleInput(e,"newProduct")}/>Pantalones	
								<input type="radio" name="subcategory"  value="Sorts"  onChange={e=> context.handleInput(e,"newProduct")}/>Sorts	
								<input type="radio" name="subcategory"  value="Vestidos"  onChange={e=> context.handleInput(e,"newProduct")}/>Vestidos	
								<input type="radio" name="subcategory"  value="Zapatos"  onChange={e=> context.handleInput(e,"newProduct")}/>Zapatos
								<input type="radio" name="subcategory"  value="Ropa de invierno"  onChange={e=> context.handleInput(e,"newProduct")}/>Ropa de invierno
								<input type="radio" name="subcategory"  value="Ropa deportiva"  onChange={e=> context.handleInput(e,"newProduct")}/>Ropa deportiva			
							</div>
						</div>
					
						<div>
							{context.state.stockInputs.map(()=>(<StockInput/>))}
							<button  onClick={context.addStockForm}>Agrega mas inventario</button>
						</div>
						<button type="submit">Add Product</button>
					</AddProdTag>
				
				)}
			</MyContext.Consumer>);
  }
}

function StockInput(props){
	return(
		<MyContext.Consumer>
		{context=>(
			<InventoryInput>
				<div className="inventory-blocks">
					<label for="quantity">Cantidad</label>
					<input name="quantity" type="number" placeholder="0" onChange={context.handleStockInput}/>
				</div>
				<div  className="inventory-blocks">
					<label for="color">color</label>
					<input name="color" type="text" placeholder="color"  onChange={context.handleStockInput}/>
				</div>
				<div  className="inventory-blocks">
					<label for="talla">Talla</label>
					<input name="size" type="text" placeholder="sizes"  onChange={context.handleStockInput}/>
				</div>
			</InventoryInput>
		)}
		
		</MyContext.Consumer>
	)
}
