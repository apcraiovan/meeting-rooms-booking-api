import { ResponsseGetUserDto } from "../dto/getusers.dto";
class UserMapper{
    public static SimpleUsers(userdata:ResponsseGetUserDto[]):ResponsseGetUserDto[]{
       return  userdata.map((element)=>{
            return {
                ID:element.ID,
                Name:element.Name
            }
        })

    }

}
export default UserMapper;
