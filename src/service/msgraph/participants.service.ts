import axios from "axios";
import MS_GRAPH_PATH from "../../constants/constants";

export class ParticipantService {
  async getAllParticipants() {
    try {
      const participants = await axios.get(MS_GRAPH_PATH.USERS, {
        headers: { Authorization: process.env.AUTH_KEY },
      });
      return participants ? participants.data : null;
    } catch (err) {
      console.error(err);
    }
  }
}
