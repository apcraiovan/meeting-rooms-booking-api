import { ResponseMeetParticipantsDto} from "../dto/getparticipants.dto";

class ParticipantsMapper{
    public static SimpleParticipants(participantsdata:ResponseMeetParticipantsDto[]):ResponseMeetParticipantsDto[]{
        return participantsdata.map((element)=>{
            return{
                USER_ID:element.USER_ID
            }
        })

    }
}
export default ParticipantsMapper;