import { User } from "../models/user.entity";

export class UserRepository {
    async getAllUsers(): Promise<User[]> {
        return User.findAll();
    }

    async getUserById(id: string): Promise<User | null> {
        return User.findByPk(id);
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        return User.create({name, email, password});
    }
}