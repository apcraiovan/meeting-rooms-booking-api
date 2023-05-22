import { GetUserDto } from "../dto/getusers.dto";
import Users from "../models/user.entity";
class UserRepository {
  async addUser(name: string, email: string): Promise<void> {
    await Users.create({ name: name, email: email });
  }
  async getUsers(users: Number[]): Promise<GetUserDto[]> {
    const data = await Users.findAll({ where: { id: users } });
    return data.map((e: Users) => {
      const dto = {
        id: e.id,
        name: e.id,
        email: e.email,
      };
      return dto;
    });
  }
}

export default UserRepository;
