import { RequestUserDto, GetUserDto } from "../dto/getusers.dto";
import UserRepository from "../repository/user.repository";
const UserRep = new UserRepository();

class UserService {
  async addUser(name: string, email: string): Promise<void> {
    return await UserRep.addUser(name, email);
  }
  async getUsersimple(participants: RequestUserDto): Promise<GetUserDto[]> {
    const data = await UserRep.getUsers(participants.participants);
    return data;
  }
}
export default UserService;
