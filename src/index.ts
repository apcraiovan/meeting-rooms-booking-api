const express = require("express");
import {Express, Router} from "express";

const routes = require("./routes/routes");

const app : Express  = express();

app.use(routes);

app.listen(3001, ()=>{
    console.log("Server started on port 3001.");
});