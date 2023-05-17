import { Model, where } from "sequelize";
import Participants from "../models/Participants_Model";
interface ParticipantsData {
  ID: number;
  USER_ID: number;
  MEET_ID: number;
}
export const AddParticipant = async (
  userid: number,
  meetid: number
): Promise<Model> => {
  return await Participants.create({ USER_ID: userid, MEET_ID: meetid });
};
export const GetMeetingParticipants = async (
  meetid: number
): Promise<Model<ParticipantsData[], ParticipantsData[]>[]> => {
  return await Participants.findAll({
    where: {
      MEET_ID: meetid,
    },
  });
};
