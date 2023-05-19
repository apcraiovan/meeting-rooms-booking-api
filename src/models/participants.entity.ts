import {DataType,Table,Column, Model} from "sequelize-typescript";
import Users from "./user.entity";
@Table({})
class Participants extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
   userId!:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    meetId!:number;
}
// Users.belongsToMany(Meetings,{through:"Participants" ,foreignKey:'userId'});
// Meetings.belongsToMany(Users,{through:"Participants",foreignKey:'meetId'});

export default Participants;