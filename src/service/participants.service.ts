import ParticipantsRepository from "../repository/participants.repository";
import { getParticipantsDto,requestParticipantsDto } from "../dto/getparticipants.dto";
const ParticipantsR=new ParticipantsRepository();
class ParticipantsService{
  AddParticipants(participants:Number[],meetid:Number):void{
    ParticipantsR.AddParticipants(participants,meetid)
  }
  async GeetMetingParticipants (id:number):Promise<getParticipantsDto[]>{
    const data= await ParticipantsR.GetMeetingParticipants(id);
    return data;
  }
}
export default ParticipantsService;