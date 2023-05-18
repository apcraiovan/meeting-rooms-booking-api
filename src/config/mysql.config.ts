import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import { User } from "../models/user.entity";

dotenv.config(); // This should load the vars from .env file

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USERNAME = process.env.DB_USERNAME || 'root'; 
const DB_PASSWORD = process.env.DB_PASSWORD || '123';
const DB_NAME = process.env.DB_NAME || 'meetingrooms';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: 3306,
    logging: console.log,
    dialect: 'mysql',
    models: [User]
});

async function connectToDatabase(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Database connection established!');
    } catch(err) {
        console.error('Unable to connect to the database!', err);
    }
}

export { sequelize, connectToDatabase };