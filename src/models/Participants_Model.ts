import sequelize from "../config/db-config";
import {DataTypes} from "sequelize";
import Users from "./User_Moedel";
import Meetings from "./meetings";

const Participants=sequelize.define('Participants',{
    ID:{type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false},
    
})
Users.belongsToMany(Meetings,{through:Participants,foreignKey:'USER_ID'});
Meetings.belongsToMany(Users,{through:Participants,foreignKey:'MEET_ID'});

export default Participants;