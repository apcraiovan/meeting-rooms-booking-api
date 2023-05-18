import { CreateUserDto } from "../dto/create.user.dto";
import { User } from "../models/user.entity";
import { UserRepository } from "../repository/user.repository";


const userRepository = new UserRepository();

export class UserService {
    async getAllUsers(): Promise<User[]> {
        return userRepository.getAllUsers();
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const {name, email, password} = createUserDto;
        return userRepository.createUser(name, email, password);
    }
}