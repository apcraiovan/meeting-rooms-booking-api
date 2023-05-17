import { Model, where } from "sequelize";
import Meetings from "../models/meetings.model";

interface iMeetings {
    ID: number;
    Name: string;
    Description: string;
    StartTime: Date;
    EndTime: Date;
  }
  
  const getAllMeetings = async (roomID: number): Promise<iMeetings[]> => {
    try {
      const meetings = await Meetings.findAll({
        where: {
          RoomID: roomID,
        },
      });
  
      const meetingsFormat: iMeetings[] = meetings.map((meeting: any) => ({
        ID: meeting.ID,
        Name: meeting.Name,
        Description: meeting.Description,
        StartTime: meeting.StartTime,
        EndTime: meeting.EndTime,
      }));
  
      return meetingsFormat;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };  

export { getAllMeetings }