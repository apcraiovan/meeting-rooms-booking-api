import {Router} from "express";
import {EventController} from "../controller/msgraphController/events.controller";
import {MeetingRoomsController} from "../controller/msgraphController/meetingRoom.controller";
import {ParticipantsController} from "../controller/msgraphController/participants.controller";

const routerMsgraph = Router();

const eventController = new EventController();
const participantsController = new ParticipantsController();
const meetingRoomController = new MeetingRoomsController();

routerMsgraph
    .route("/msgraph/participants/:countryCode")
    .get(participantsController.getAllParticipants);

routerMsgraph
    .route("/msgraph/participant/:nameToSearch")
    .get(participantsController.getParticipant);

routerMsgraph.get(
    "/msgraph/meetingrooms/:mailPatern",
    meetingRoomController.getAllMeetingRooms
);

routerMsgraph.get(
    "/msgraph/meetingroom/:meetingRoomId?",
    meetingRoomController.getMeetingRoomById
);

routerMsgraph.get(
    "/msgraph/meetingroom/:meetingRoomId/event/:eventId",
    meetingRoomController.getEventForMeetingRoom
);
routerMsgraph
    .route("/msgraph/meetingrooms/")
    .post(meetingRoomController.createNewMeetingRoom)
    .put(meetingRoomController.updateMeetingRoom)
    .delete(meetingRoomController.deleteMeetingRoom);

routerMsgraph
    .get("/msgraph/events/:meetingRoomId",eventController.getEventsByRoom )

routerMsgraph
    .post("/msgraph/events", eventController.createNewEvent);

export default routerMsgraph;

//==============================
//Participants
//GET - Get All Participants
//==============================
//Meeting Rooms
//GET - Get All Meeting Rooms
//  * Mail Patern - The pattern of the email address that is used for meeting rooms
//POST - Create a MeetingRoom
//PUT - Update a MeetingRoom
//DELETE - Delete a MeetingRoom
//==============================
//Events
//GET - Get All Events
//POST - Create An Event
//==============================
