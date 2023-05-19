// import { Sequelize } from "sequelize";
// const sequelize = new Sequelize(
//   "mysql://root:root1234@localhost:3306/mySQLInternshipApp"
// );
// export default sequelize;

import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.DATABASE ?? "mySQLInternshipApp";
const username = process.env.USERNAME ?? "root";
const password = process.env.PASSWORD ?? "root1234";

const sequelize = new Sequelize(database, username, password, {
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
});

export default sequelize;
