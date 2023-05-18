import Participants from "../models/participants_models";
import { RequestGetParticipantsDto, ResponseMeetParticipantsDto } from "../dto/getparticipants.dto";

class ParticipantsRepository{
     AddParticipants(participants:Number[],meetid:Number):void{
        participants.forEach(async (id)=>{
            await Participants.create({USER_ID:id,MEET_ID:meetid})
        });
    }
    async GetMeetingParticipants(id:number):Promise<ResponseMeetParticipantsDto[]>{
        const data=await Participants.findAll({where:{MEET_ID:id},raw:true});
        return data as unknown as ResponseMeetParticipantsDto[];

    }
}
export default ParticipantsRepository;