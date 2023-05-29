import axios from "axios";

import {Event} from "../../dto/msgraph/eventDtos/event.dto";
import {CreateEventDto} from "../../dto/msgraph/eventDtos/create.event.dto";
import {MS_GRAPH_BASIC_PATHS} from "../../constants/constants";
import {MsGraphUtils} from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class EventService {
    async getAllEvents(): Promise<Event[] | Error> {

        try {
            const events = await axios.get(MS_GRAPH_BASIC_PATHS.EVENTS, await msGraphUtils.getHeadersConfig());
            return events.data;
        } catch (err) {
            console.error(err);
            return err as Error;
        }
    }

    static parseEvent(eventToParse : Event) : CreateEventDto {
        return {
            subject: eventToParse.subject,
            id: eventToParse.id,
            body: eventToParse.body,
            attendees: eventToParse.attendees,
            end: eventToParse.end,
            start: eventToParse.start
        };
    }

    async getEventsByRoom(roomId: string) : Promise<CreateEventDto[] | Error> {
        try {
            const events = await axios.get(`${MS_GRAPH_BASIC_PATHS.USERS}${roomId}/events`, await msGraphUtils.getHeadersConfig());
            let parsedEvents : CreateEventDto[] = [];
            events.data.value.forEach((event : Event) => { parsedEvents.push(EventService.parseEvent(event))})
            return parsedEvents;
        }catch (err){
            console.error(err);
            return err as Error;
        }
    }
    async createNewEvent(createEventDto: CreateEventDto): Promise<Event | Error> {
        try {
            const newEvent = await axios.post(MS_GRAPH_BASIC_PATHS.USERS + createEventDto.id + "/calendar/events", createEventDto, await msGraphUtils.getHeadersConfig());
            return newEvent.data;
        } catch (err) {
            console.error(err);
            return err as Error;
        }
    }
}
