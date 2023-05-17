import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATABASE ?? "";
const username = process.env.USERNAME ?? "";
const password = process.env.PASSWORD ?? "";

const sequelize = new Sequelize(database, username, password , {
  host: process.env.HOST,
  dialect: "mysql"})
       
export default sequelize;

