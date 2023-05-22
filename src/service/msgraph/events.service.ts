import { Event } from "../../models/msgraph/event.entity";
import { EventRepository } from "../../repository/msgraph/event.repository";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";

const eventRepository = new EventRepository();

export class EventService {
  async getAllEvents(): Promise<Event[]> {
    return eventRepository.getAllEvents();
  }

  async createNewEvent(createEventDto: CreateEventDto): Promise<Event> {
    const {
      eventName,
      eventStartTime,
      eventEndTime,
      eventDescription,
      attendees,
    } = createEventDto;
    return eventRepository.createEvent({
      eventName,
      eventDescription,
      eventStartTime,
      eventEndTime,
      attendees,
    });
  }
}
