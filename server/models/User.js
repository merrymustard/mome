const {
    model,
    Schema
} = require('mongoose');
const PLM = require("passport-local-mongoose");
const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    lastname: String,
    email: String,
    image: String,
    orders: [{}],
    wishList: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
})
userSchema.plugin(PLM, {
    usernameField: 'username'
});

module.exports = model('User', userSchema);