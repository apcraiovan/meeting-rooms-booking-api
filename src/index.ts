<<<<<<< HEAD
const express = require("express");
import {Express, Router} from "express";

const routes = require("./routes/routes");

const app : Express  = express();

app.use(routes);

app.listen(3001, ()=>{
    console.log("Server started on port 3001.");
});
=======
import app from './app';
import dotenv from 'dotenv';
import { connectToDatabase, sequelize } from './config/mysql.config';
import { User } from './models/user.entity';


dotenv.config(); // This should load the vars from .env file

const PORT = process.env.PORT || 4000;

connectToDatabase().then(() => {
   // sequelize.addModels([User]);

    sequelize.sync({ force: true}).then(() => {
        console.log('Db is sync!');

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to synch...', err);
    });
});


>>>>>>> cb66bafd79f7323166873d2dbc2d13b5b406606d
