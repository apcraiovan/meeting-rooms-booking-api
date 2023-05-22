import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Users from "../models/user.entity";
import Participants from "../models/participants.entity";
import Meeting from "../models/meeting.entity";
import Rooms from "../models/rooms.entity";
dotenv.config(); // This should load the vars from .env file

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "Fanelu2002!";
const DB_NAME = process.env.DB_NAME || "test";

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: 4000,
  logging: console.log,
  dialect: "mysql",
  models: [Users, Participants, Meeting, Rooms],
});

async function connectToDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("Database connection established!");
  } catch (err) {
    console.error("Unable to connect to the database!", err);
  }
  try {
    await sequelize.authenticate();
    console.log("Database connection established!");
  } catch (err) {
    console.error("Unable to connect to the database!", err);
  }
}

export { sequelize, connectToDatabase };
