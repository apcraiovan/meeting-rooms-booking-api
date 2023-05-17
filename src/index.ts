import express from "express";
import sequelize from "./config/db-config";
import Meetings from "./models/meetings";
import Rooms from "./models/rooms";
import Users from "./models/User_Moedel";
import Participants from "./models/Participants_Model";
const app = express();
const Room=new Rooms()
const Meeting = new Meetings();
const User=new Users();
const Participant=new Participants();
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
;