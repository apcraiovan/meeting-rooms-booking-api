import e, { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { CreateUserDto } from "../dto/create.user.dto";

const userService = new UserService();

export class UserController {
    
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Ghinion: Internal server problems...:P '});
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const createUserDto: CreateUserDto = req.body;
            const user = await userService.createUser(createUserDto);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'nu merge frate!'});
        }
    }
}