const { model, Schema } = require("mongoose")
const PLM = require("passport-local-mongoose")
const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  image: String,
  address: String,
  country: String,
  gender: {
    type: String,
    enum: ["Hombre", "Mujer"]
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  wishList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
})

userSchema.plugin(PLM, { usernameField: "email" })

module.exports = model("User", userSchema)
