import {Table,DataType, Model,Column} from "sequelize-typescript";
@Table({})
class Users extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    })
    ID!:string;
    @Column({
        type:DataType.STRING,
        allowNull:false,

    })
    Name!:string;
   

}
export default Users;
