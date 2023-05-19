import {sequelize} from "./config/mysql.config";
import app from "./app";
import Meeting from "./models/meeting.entity";
import MeetingService from "./service/meeting.service";

const MeetingServ = new MeetingService()

sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(async() => {
        console.log("success");


        const meetToAdd = [
          {
            name: "intalnire",
            description: "descriere",
            startTime: new Date(),
            endTime: new Date(),
            roomId: 2
          },
         
        ];

        // Meeting.bulkCreate(meetToAdd)
        //   .then(() => {
        //     console.log("meet created successfully");
        //   })
        //   .catch((err: Error) => {
        //     console.log("Error creating meet: ", err);
        //   });


          const testFunctionGetMeeting = async () => {
            try {
              const meetings = await MeetingServ.GetAllMeetingsByRoomId(22);
              //const meetings = await MeetingServ.GetMeetingById(4);
  
              console.log(meetings);
            } catch (error) {
              console.log(error);
            }
          };
  
          testFunctionGetMeeting();


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
