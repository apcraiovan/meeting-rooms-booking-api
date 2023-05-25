import axios from "axios";
import MS_GRAPH_PATH from "../../constants/constants";

export class ParticipantService {
    async getAllParticipants(countryCode : string) {
        try {
            const headersConfig = await msGraphUtils.getHeadersConfig();
            if(countryCode === "RO"){
                const participants = await axios.get(
                    `${MS_GRAPH_BASIC_PATHS.GROUPS}/${process.env.GROUP_CODE_RO}/members`,
                    headersConfig
                );
                return participants ? participants.data : null;
            }
            else if(countryCode === "DE"){
                const participants = await axios.get(
                    `${MS_GRAPH_BASIC_PATHS.GROUPS}/${process.env.GROUP_CODE_DE}/members`,
                    headersConfig
                );
                return participants ? participants.data : null;
            }
        } catch (err) {
            // console.error(err);
        }
    }

}
