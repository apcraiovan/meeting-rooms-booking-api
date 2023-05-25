import axios from "axios";
import MS_GRAPH_PATH from "../../constants/constants";
import { MsGraphUtils } from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class ParticipantService {
  static headersConfig: any;

  constructor() {
    ParticipantService.headersConfig = {
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

  async getAllParticipants() {
    try {
      await ParticipantService.getToken();
      const participants = await axios.get(
        MS_GRAPH_PATH.USERS,
        ParticipantService.headersConfig
      );
      return participants ? participants.data : null;
    } catch (err) {
      console.error(err);
    }
  }

  async getParticipant(_name: string) {
    try {
      await ParticipantService.getToken();
      const participant = await axios.get(
        `https://graph.microsoft.com/v1.0/users?$search="displayName:${_name}"`,
        ParticipantService.headersConfig
      );
      return participant ? participant.data : null;
    } catch (err) {
      console.error(err);
    }
  }
}
