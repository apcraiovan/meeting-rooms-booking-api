const express = require("express");
const morgan = require("morgan");
import sequelize from "./config/db-config";
import Rooms from "./models/rooms";
const app = express();
const UserModel = new Rooms();
app.use(morgan("tiny"));
sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(8000, () => {
  console.log("server started");
});
