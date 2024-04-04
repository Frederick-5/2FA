const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require("dotenv").config()

mongoose.connect(process.env.TEST_DB)

const Schema = new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    TFA_enabled: Boolean,
    unique: String,
    secret: String
})

const User = mongoose.model("Clients", Schema)
module.exports = {User, bcrypt}
