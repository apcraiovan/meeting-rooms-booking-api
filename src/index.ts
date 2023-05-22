import {connectToDatabase, sequelize} from "./config/mysql.config";
import app from "./app";
import Meeting from "./models/meeting.entity";
import MeetingService from "./service/meeting.service";

const meetingServ = new MeetingService()

connectToDatabase().then(() => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(async() => {
        console.log("success");

        //POST
        const testFunctionAddMeeting = async () => {
          try {
            const meetings = await meetingServ.AddMeeting("test2", "descriere2", new Date(), new Date(), 22);

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
