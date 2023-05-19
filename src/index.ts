import express from "express";
import { sequelize } from "./config/mysql.config";
import Rooms from "./models/rooms.entity";
import RoomsRepository from "./repository/rooms.repository";
import RoomsService from "./service/rooms.service";
const app = express();
const RoomsS = new RoomsService();
sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");

    sequelize.addModels([Rooms]);

    sequelize
      .sync()
      .then(async () => {
        console.log("success");

        const roomsToAdd = [
          {
            name: "Colective IQ Room",
            capacity: 6,
            description:
              "This room is located on the right side of the office, it is a large meeting room, perfect for presentations and discussing ideas",
          },
          {
            name: "High Table Room",
            capacity: 4,
            description:
              "This room is located on the right side of the office, it is a small meeting room, perfect for fast meeting calls",
          },
          {
            name: "Presentation Success Room",
            capacity: 8,
            description:
              "This room is located on the right side of the office, it is large, perfect for showing the functionality of a successfully implemented idea",
          },
          {
            name: "Focus Room",
            capacity: 3,
            description:
              "This Room is located on the left side of the office, it is small, perfect for taking some time focusing on an idea and coming up with an implementation",
          },
          {
            name: "Room for Growth",
            capacity: 4,
            description:
              "This room is located on the left side of the office, near the kitchen, it is small, perfect for debating and brainstorming for ideas",
          },
        ];

        Rooms.bulkCreate(roomsToAdd)
          .then(() => {
            console.log("Rooms created successfully");
          })
          .catch((err: Error) => {
            console.log("Error creating rooms: ", err);
          });

        const testFunctionGetAllRooms = async () => {
          try {
            const rooms = await RoomsS.GeetAllRooms();

            console.log(rooms);
          } catch (error) {
            console.log(error);
          }
        };

        testFunctionGetAllRooms();
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
