import Participants from "../models/participants.entity";
import { getParticipantsDto } from "../dto/getparticipants.dto";
class ParticipantsRepository{
    async AddParticipants(participants:Number[],meetid:Number):Promise<void>{
        participants.forEach(async (id)=>{
            await Participants.create({USER_ID:id,MEET_ID:meetid})
        });
    }
    async GetMeetingParticipants(id:number):Promise<getParticipantsDto[]>{
        const data=await Participants.findAll({where:{meetid:id},raw:true});
        return data.map((e:Participants)=>{
               const dto={
                userId:e.userId
               }
               return dto;
        })
    }
}

export default ParticipantsRepository;