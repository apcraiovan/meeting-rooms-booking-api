import express from "express";
import sequelize from "./src/configs/db-config";
import Meetings from "./src/models/meetings";

const app = express();
const Meeting = new Meetings();

sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");

    sequelize
      .sync()
      .then(() => {
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
