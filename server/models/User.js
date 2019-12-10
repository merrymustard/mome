const {
    model,
    Schema
} = require('mongoose');
const PLM = require("passport-local-mongoose");
const userSchema = new Schema({
    username: String,
    password: String,
    campus: {
        type: String,
        enum: ['Madrid', 'Barcelona', 'Miami', 'Paris', 'Berlin', 'Amsterdam', 'México', 'Sao Paulo', 'Lisbon']
    },
    course: {
        type: String,
        enum: ['WebDev', 'UX/UI', 'Data Analytics']
    },
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