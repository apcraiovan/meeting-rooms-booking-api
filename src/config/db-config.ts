import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// const database = process.env.DATABASE ?? "";
// const username = process.env.USERNAME ?? "";
// const password = process.env.PASSWORD ?? "";

// const sequelize = new Sequelize(database, username, password , {
//   host: 'localhost',
//   dialect: "mysql"})

// console.log(database)

const sequelize=new Sequelize("mysql://root:doctari31@localhost:3306/meetingsDB");
        
export default sequelize;

