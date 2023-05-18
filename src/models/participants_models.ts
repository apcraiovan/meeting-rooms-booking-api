import {DataType,Table,Column, Model} from "sequelize-typescript";
import Users from "./user_models";
import Meetings from "./meetings";
@Table({})
class Participants extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    })
    ID!:string;
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    USER_ID!:string;
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    MEET_ID!:string
}
Users.belongsToMany(Meetings,{through:"Participants" ,foreignKey:'USER_ID'});
Meetings.belongsToMany(Users,{through:"Participants",foreignKey:'MEET_ID'});

export default Participants;