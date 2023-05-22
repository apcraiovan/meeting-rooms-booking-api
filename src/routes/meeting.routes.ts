import { Router } from "express";
import { MeetingController } from "../controller/meeting.controller";

const routerMeeting = Router();
const meetingController = new MeetingController();

routerMeeting.get('/meetings', meetingController.getAllMeetingsByRoomID);
routerMeeting.get('/meetings/:id', meetingController.getMeetingByID);
routerMeeting.post('/meetings', meetingController.postMeeting);

export default routerMeeting;