//schema for USER

const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const UserSchema = new mongoose.Schema({
    // type must be string, it is required, must be atleast 6 characters and should be unique
    username: {type: String, required: true, min: 6, unique: true},
    // type must be string, must be atleast 6 characters, it is required
    password: {type: String, min: 6, required: true}
})

const UserModel = model("Users", UserSchema)

module.exports = UserModel