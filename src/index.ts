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

import sequelize from "./config/mysql.config";
import Meeting from "./models/meetings.model";
import app from "./app";


const Meeting1= new Meeting()

sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");

    sequelize
      .sync()
      .then(() => {
        console.log("success");

        const meet = [
          {
            Name: "name",
            Description:
              "ercece",
            //RoomID: 1,
            StartTime: "2023-05-19T08:35:59.620Z",
            EndTime: "2023-05-19T08:35:59.620Z",
          },
         
        ];

        Meeting.bulkCreate(meet)
          .then(() => {
            console.log("successfully");
          })
          .catch((err: Error) => {
            console.log("Error creating meet: ", err);
          });


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