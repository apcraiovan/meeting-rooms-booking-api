import axios from "axios";

export class ParticipantRepository{
    async getAllParticipants(){
        try{
            const participants = await axios.get("https://graph.microsoft.com/v1.0/users",{headers:{Authorization:process.env.AUTH_KEY}})
            return participants ? participants.data : null;
        }
        catch(err){
        console.error(err);
        }
    }
}