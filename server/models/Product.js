const { model, Schema } = require("mongoose")

const productSchema = new Schema({
  name: String,
  brand: String,
  caption: String,
  price: Number,
  size: Array,
  quantity: Array,
  color: Array,
  details: String,
  images: [String],
  category: {
    type: String,
    enum: ["Hombre", "Mujer"]
  },
  subcategory: {
    type: String,
    enum: [
      "Camisas",
      "Camisetas",
      "Ropa de invierno",
      "Pantalones",
      "Sorts",
      "Vestidos",
      "Faldas",
      "Zapatos",
      "Accesorios",
      "Ropa deportiva"
    ]
  }
})

module.exports = model("Product", productSchema)
