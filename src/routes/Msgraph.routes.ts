import { Router } from "express";
import { EventController } from "../controller/msgraphController/events.controller";
import { MeetingRoomsController } from "../controller/msgraphController/meetingRoom.controller";
import { ParticipantsController } from "../controller/msgraphController/participants.controller";

const routerMsgraph = Router();

const eventController = new EventController();
const participantsController = new ParticipantsController();
const meetingRoomController = new MeetingRoomsController();

routerMsgraph
  .route("/msgraph/participants")
  .get(participantsController.getAllParticipants);

routerMsgraph
  .route("/msgraph/meetingrooms")
  .get(meetingRoomController.getAllMeetingRooms)
  .post(meetingRoomController.createNewMeetingRoom)
  .put(meetingRoomController.updateMeetingRoom)
  .delete(meetingRoomController.deleteMeetingRoom);

routerMsgraph
  .route("/msgraph/events")
  .get(eventController.getAllEvents)
  .post(eventController.createNewEvent);

export default routerMsgraph;

//==============================
//Participants
//GET - Get All Participants
//==============================
//Meeting Rooms
//GET - Get All Meeting Rooms
//POST - Create a MeetingRoom
//PUT - Update a MeetingRoom
//DELETE - Delete a MeetingRoom
//==============================
//Events
//GET - Get All Events
//POST - Create An Event
//==============================
