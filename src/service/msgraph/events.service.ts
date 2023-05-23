import axios from "axios";

import { Event } from "../../dto/msgraph/eventDtos/event.dto";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";
import MS_GRAPH_PATH from "../../constants/constants";

export class EventService {
  async getAllEvents(): Promise<Event[] | Error> {
    try {
      const events = await axios.get(MS_GRAPH_PATH.EVENTS, {
        headers: { authorization: process.env.AUTH_KEY },
      });
      return events.data;
    } catch (err) {
      console.error(err);
      return err as Error;
    }
  }

  async createNewEvent(createEventDto: CreateEventDto): Promise<Event | Error> {
    try {
      const newEvent = await axios.post(MS_GRAPH_PATH.EVENTS, createEventDto, {
        headers: { authorizatoin: process.env.AUTH_KEY },
      });
      return newEvent.data;
    } catch (err) {
      console.error(err);
      return err as Error;
    }
  }
}
