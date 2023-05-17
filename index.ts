import express from "express";
import sequelize from "./src/configs/db-config";
import Meetings from "./src/models/meetings.model";
import Rooms from "./src/models/rooms.model";
import Users from "./src/models/users.model";
import Participants from "./src/models/participants.model";

const app = express();
const Meeting = new Meetings();
const Room = new Rooms();
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
