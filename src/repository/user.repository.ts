import { getUserDto } from "../dto/getusers.dto";
import Users from "../models/user.entity";
class UserRepository {
  async AddUser(name: string, email: string): Promise<void> {
    await Users.create({ Name: name, Email: email });
  }
  async GetUsers(users: Number[]):Promise<getUserDto[]> {
    const data = await Users.findAll({ where: { id: users },raw:true,mapToModel:true});
    return data.map((e:Users)=>{
        const dto={
            id:e.id,
            name:e.id,
            email:e.email
        }
        return dto;
    })
  }
}

export default UserRepository;
