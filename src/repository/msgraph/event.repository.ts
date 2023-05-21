import axios from "axios";

export class EventRepository {
  async getAllEvents() {
    try {
      const events = await axios.get(
        "https://graph.microsoft.com/v1.0/events",
        { headers: { authorization: process.env.AUTH_KEY } }
      );
      return events;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async createEvent(createEventData) {
    try {
      const newEvent = await axios.post(
        "https://graph.microsoft.com/v1.0/events",
        createEventData,
        { headers: { authorizatoin: process.env.AUTH_KEY } }
      );
      return newEvent;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
