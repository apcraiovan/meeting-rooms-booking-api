import { ResponsseGetUserDto } from "../dto/getusers.dto";
import Users from "../models/user_models";
class UserRepository {
  async AddUser(name: string, email: string): Promise<void> {
    await Users.create({ Name: name, Email: email });
  }
  async GetUsers(users: Number[]):Promise<ResponsseGetUserDto[]> {
    const data = await Users.findAll({ where: { ID: users },raw:true,mapToModel:true});
    return data as unknown as ResponsseGetUserDto[];
  }
}

export default UserRepository;
