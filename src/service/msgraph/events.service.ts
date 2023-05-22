import axios from "axios";
import { Event } from "../../dto/msgraph/eventDtos/event.dto";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";
import CONSTANTS from "../../constants/constants";

export class EventService {
  async getAllEvents(): Promise<Event[] | Error> {
    try {
      const events = await axios.get(
        CONSTANTS.MS_GRAPH_PATH_EVENTS,
        { headers: { authorization: process.env.AUTH_KEY } }
      );
      return events.data;
    } catch (err) {
      console.error(err);
      return err as Error;
    }
  }

  async createNewEvent(createEventDto: CreateEventDto): Promise<Event | Error> {
    try {
      const newEvent = await axios.post(
        CONSTANTS.MS_GRAPH_PATH_EVENTS,
        createEventDto,
        { headers: { authorizatoin: process.env.AUTH_KEY } }
      );
      return newEvent.data;
    } catch (err) {
      console.error(err);
      return err as Error;
    }
  }
}
