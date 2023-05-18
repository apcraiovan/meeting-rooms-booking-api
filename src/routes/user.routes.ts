import { Router } from "express";
import { UserController } from "../controller/user.controller";

const routerUser = Router();
const userController = new UserController();

routerUser.get('/users', userController.getAllUsers);
routerUser.post('/users', userController.createUser);

export default routerUser;

