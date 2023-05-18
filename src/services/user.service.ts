import { RequestGetUsersDto,ResponsseGetUserDto } from "../dto/getusers.dto";
import UserRepository from "../repository/user.repository";
import UserMapper from "../mapper/user.mapper";
const UserRep=new UserRepository();

class UserService{
    async AddUser(name:string,email:string):Promise<void>{
        return await UserRep.AddUser(name,email);
    }
    async GetUsersSimple(participants:RequestGetUsersDto):Promise<ResponsseGetUserDto[]>{
        const data=await   UserRep.GetUsers(participants.participants);
        return UserMapper.SimpleUsers(data);

}
}
export default UserService;
