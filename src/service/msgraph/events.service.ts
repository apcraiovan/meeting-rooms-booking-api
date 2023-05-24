import axios from "axios";

import { Event } from "../../dto/msgraph/eventDtos/event.dto";
import { CreateEventDto } from "../../dto/msgraph/eventDtos/create.event.dto";
import MS_GRAPH_PATH from "../../constants/constants";
import { MsGraphUtils } from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class EventService {
  static headersConfig: any;

  constructor() {
    EventService.headersConfig = {
      headers: {
        Authorization: `Bearer `,
        ConsistencyLevel: "eventual",
      },
    };
  }

  static async getToken() {
    const token = await msGraphUtils.getAccessToken();
    this.headersConfig.headers.Authorization = "Bearer " + token;
  }

  async getAllEvents(): Promise<Event[] | Error> {
    try {
      const events = await axios.get(
        MS_GRAPH_PATH.EVENTS,
        EventService.headersConfig
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
        MS_GRAPH_PATH.EVENTS,
        createEventDto,
        EventService.headersConfig
      );
      return newEvent.data;
    } catch (err) {
      console.error(err);
      return err as Error;
    }
  }
}
