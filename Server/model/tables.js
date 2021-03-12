const S = require("sequelize");
const db = require("../db");

const Restaurant = db.define('restaurants', {
    name: {
        type: S.STRING(50),
        allowNull: false,
    },
    location: {
        type: S.STRING(50),
        allowNull: false,
    },
    price_range: {
        type: S.INTEGER,
        validate: {
            min: 0,
            max: 5
        }
    }
});

Restaurant.sync();

module.exports = Restaurant;