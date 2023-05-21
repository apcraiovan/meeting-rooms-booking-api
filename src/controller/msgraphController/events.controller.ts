import { Request, Response } from "express";

const eventsService = new EventsService();

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



