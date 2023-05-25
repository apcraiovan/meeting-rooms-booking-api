import axios from "axios";
import { MS_GRAPH_BASIC_PATHS } from "../../constants/constants";
import { MsGraphUtils } from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class ParticipantService {
  async getAllParticipants(countryCode: string) {
    try {
      console.log("country", countryCode);
      const headersConfig = await msGraphUtils.getHeadersConfig();
      console.log("headers", headersConfig);
      if (countryCode === "RO") {
        const participants = await axios.get(
          `${MS_GRAPH_BASIC_PATHS.GROUPS}${process.env.GROUP_CODE_RO}/members`,
          headersConfig
        );
        return participants ? participants.data : null;
      } else if (countryCode === "DE") {
        const participants = await axios.get(
          `${MS_GRAPH_BASIC_PATHS.GROUPS}${process.env.GROUP_CODE_DE}/members`,
          headersConfig
        );
        return participants ? participants.data : null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getParticipant(_name: string) {
    try {
      const headersConfig = await msGraphUtils.getHeadersConfig();

      const participant = await axios.get(
        `https://graph.microsoft.com/v1.0/users?$search="displayName:${_name}"`,
        headersConfig
      );
      return participant ? participant.data : null;
    } catch (err) {
      console.error(err);
    }
  }
}
