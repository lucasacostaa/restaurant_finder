const Sequelize = require("sequelize");
const S = Sequelize;
require('dotenv').config()

const pw = process.env.PW

const db = new Sequelize(`postgres://postgres:${pw}@localhost:5432/restaurant_finder`, {
    logging: false,
  });

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
    },
    onSale: {
        type: S.BOOLEAN
    }
});

Restaurant.sync();

module.exports = Restaurant;