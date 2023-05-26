import axios from "axios";
import {MS_GRAPH_BASIC_PATHS} from "../../constants/constants";
import {MsGraphUtils} from "../../utils/msgraph/msgraph.utils";

const msGraphUtils = new MsGraphUtils();

export class ParticipantService {
    async getAllParticipants(countryCode: string) {
        try {
            if (countryCode === "RO") {
                const participants = await axios.get(
                    `${MS_GRAPH_BASIC_PATHS.GROUPS}${process.env.GROUP_CODE_RO}/members`, await msGraphUtils.getHeadersConfig()
                );
                return participants ? participants.data : null;
            } else if (countryCode === "DE") {
                const participants = await axios.get(
                    `${MS_GRAPH_BASIC_PATHS.GROUPS}${process.env.GROUP_CODE_DE}/members`,
                    await msGraphUtils.getHeadersConfig()
                );
                return participants ? participants.data : null;
            }
        } catch (err) {
            console.error(err);
        }
    }

    async getParticipant(nameToSearchFor: string) {
        try {
            const participant = await axios.get(
                `https://graph.microsoft.com/v1.0/users?$search="displayName:${nameToSearchFor}"`,
                await msGraphUtils.getHeadersConfig()
            );
            return participant ? participant.data : null;
        } catch (err) {
            console.error(err);
        }
    }
}
