import { Request, Response } from "express";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";
import { EventService } from "../../service/msgraph/events.service";

const eventsService = new EventService();

export class EventController {
  async getAllEvents(req: Request, res: Response): Promise<void> {
    try {
      const events = await eventsService.getAllEvents();
      res.json(events);
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error...");
    }
  }
  async createNewEvent(req: Request, res: Response): Promise<void> {
    try {
      const createEventDto: CreateEventDto = req.body;
      const event = eventsService.createNewEvent(createEventDto);
      res.status(201).json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error...");
    }
  }
}
