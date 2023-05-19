import express from "express";
import {sequelize} from "./config/mysql.config";
const app = express();
sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(async() => {
        console.log("success");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  })
  .catch((err: Error) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server started");
});
;