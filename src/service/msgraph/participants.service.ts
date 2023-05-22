import axios from "axios";
import CONSTANTS from "../../constants/constants";

export class ParticipantService {
  async getAllParticipants() {
    try {
      const participants = await axios.get(
        CONSTANTS.MS_GRAPH_PATH_USERS,
        { headers: { Authorization: process.env.AUTH_KEY } }
      );
      return participants ? participants.data : null;
    } catch (err) {
      console.error(err);
    }
  }
}
