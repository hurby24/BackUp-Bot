const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    profile : { type: String, required: true },
    roles: { type: Array, required: true }
});

module.exports = { Users: mongoose.model("Users", Users) };


