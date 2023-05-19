import {Table,DataType, Model,Column} from "sequelize-typescript";
@Table
class Users extends Model{
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    name!:string;
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    email!:string;
}
export default Users;