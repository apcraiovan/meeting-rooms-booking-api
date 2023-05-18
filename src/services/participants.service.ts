import ParticipantsRepository from "../repository/participants.repository";
import { RequestGetParticipantsDto, ResponseMeetParticipantsDto } from "../dto/getparticipants.dto";
import ParticipantsMapper from "../mapper/participants.mapper";
const ParticipantsR=new ParticipantsRepository();
class ParticipantsService{
  AddParticipants(participants:Number[],meetid:Number):void{
    ParticipantsR.AddParticipants(participants,meetid)
  }
  async GeetMetingParticipants (id:RequestGetParticipantsDto):Promise<ResponseMeetParticipantsDto[]>{
    const data= await ParticipantsR.GetMeetingParticipants(id.id);
    return ParticipantsMapper.SimpleParticipants(data);
  }
}
export default ParticipantsService;