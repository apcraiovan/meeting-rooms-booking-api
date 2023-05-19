import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.DATABASE ?? "meetingsDB";
const username = process.env.USERNAME ?? "root";
const password = process.env.PASSWORD ?? "doctari31";

const sequelize = new Sequelize(database, username, password , {
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",

})


export default sequelize;
