import { Router } from "express";
import { MeetingController } from "../controller/meetings.controller";

const routerMeeting = Router();
const meetingController = new MeetingController();

routerMeeting.get('/meetings', meetingController.getAllMeetingsByRoomID);
routerMeeting.get('/meetings/id', meetingController.getMeetingByID);
routerMeeting.post('/meetings', meetingController.createMeeting);

export default routerMeeting;
