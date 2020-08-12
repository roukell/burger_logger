const { Model, DataTypes } = require('sequelize');
const sequelize = require("../app/connection.js");

// Creates a "Burger" model that matches up with DB
class Burger extends Model {}
Burger.init({
    author: DataTypes.STRING,
    body: DataTypes.STRING,
}, { sequelize, modelName: 'burger'})


// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;