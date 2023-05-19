import { requestUserDto, getUserDto } from "../dto/getusers.dto";
import UserRepository from "../repository/user.repository";
const UserRep = new UserRepository();

class UserService {
  async AddUser(name: string, email: string): Promise<void> {
    return await UserRep.AddUser(name, email);
  }
  async GetUsersSimple(participants: requestUserDto): Promise<getUserDto[]> {
    const data = await UserRep.GetUsers(participants.participants);
    return data;
  }
}
export default UserService;
