import { sequelize } from "./config/mysql.config";
import app from "./app";
import Rooms from "./models/rooms.entity";
import MeetingService from "./service/meeting.service";

const meetingServ = new MeetingService()

sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");

    sequelize
      .sync()
      .then(async () => {
        console.log("success");

        //Now the create method is implemented, roomsToAdd is no longer needed, it was just for testing with some populated data in database
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

        // Rooms.bulkCreate(roomsToAdd)
        //   .then(() => {
        //     console.log("Rooms created successfully");
        //   })
        //   .catch((err: Error) => {
        //     console.log("Error creating rooms: ", err);
        //   });


          //GET
          const testFunctionGetMeeting = async () => {
            try {
              const meetings = await meetingServ.GetAllMeetingsByRoomIdAndDate(4);
              //const meetings = await meetingServ.GetAllMeetingsByRoomId(2);
              //const meetings = await MeetingServ.GetMeetingById(9);
  
              console.log(meetings);
            } catch (error) {
              console.log(error);
            }
          };
  
          testFunctionGetMeeting();


          //POST
          const testFunctionAddMeeting = async () => {
            try {
              const meetings = await meetingServ.AddMeeting("test2", "descriere2", new Date(), new Date(), 1);
  
              console.log(meetings);
            } catch (error) {
              console.log(error);
            }
          };

          //testFunctionAddMeeting()



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
