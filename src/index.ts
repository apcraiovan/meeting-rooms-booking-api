// import app from "./app";
// import { connectToDatabase, sequelize } from "./config/mysql.config";
// import dotenv from 'dotenv';

// dotenv.config(); 

// //const PORT = process.env.PORT || 5000;

// connectToDatabase().then(() => {
//    //sequelize.addModels([Meeting, Rooms]);

//     sequelize.sync({ force: true}).then(() => {
//         console.log('Db is sync!');

//         app.listen(5000, () => {
//             console.log(`Server is running on port: 5000`);
//         });
//     })
//     .catch((err) => {
//         console.error('Unable to sync...', err);
//     });
// });

import express from "express";
import sequelize from "./config/mysql.config";
import routerMeeting from "./routes/meeting.routes";
import Meeting from "./models/meetings.model";

const app = express();
// middleware
app.use(express.json());

// routes
app.use(routerMeeting);


const Meeting1= new Meeting()

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

app.listen(5000, () => {
  console.log("server started");
});