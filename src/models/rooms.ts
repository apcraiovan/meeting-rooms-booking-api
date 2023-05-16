const dbConfig = require("../config/db-config");

import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  { host: dbConfig.HOST, dialect: dbConfig.DIALECT }
);
// Define the Room model
const Room = sequelize.define(
  "Room",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rooms", // The name of the table in the database
  }
);

module.exports = { sequelize, Room };
