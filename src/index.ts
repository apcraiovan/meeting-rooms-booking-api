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

          //GET
          const testFunctionGetMeeting = async () => {
            try {
              const meetings = await MeetingServ.GetAllMeetingsByRoomId(4);
              //const meetings = await MeetingServ.GetMeetingById(9);
  
              console.log(meetings);
            } catch (error) {
              console.log(error);
            }
          };
  
          //testFunctionGetMeeting();

          //POST
          const testFunctionAddMeeting = async () => {
            try {
              const meetings = await MeetingServ.AddMeeting("test2", "descriere2", new Date(), new Date(), 22);
  
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
