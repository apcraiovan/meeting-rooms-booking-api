import axios from "axios";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";

export class EventRepository {
  async getAllEvents() {
    try {
      const events = await axios.get(
        "https://graph.microsoft.com/v1.0/events",
        { headers: { authorization: process.env.AUTH_KEY } }
      );
      return events.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async createEvent(createEventData: CreateEventDto) {
    try {
      const newEvent = await axios.post(
        "https://graph.microsoft.com/v1.0/events",
        createEventData,
        { headers: { authorizatoin: process.env.AUTH_KEY } }
      );
      return newEvent.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
