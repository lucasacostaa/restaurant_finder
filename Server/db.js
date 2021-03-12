const Sequelize = require("sequelize");
const S = Sequelize;

require('dotenv').config()

const pw = process.env.PW

const db = new Sequelize(`postgres://postgres:${pw}@localhost:5432/restaurant_finder`, {
    logging: false,
  });

module.exports = db