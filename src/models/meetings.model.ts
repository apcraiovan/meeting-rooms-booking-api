import { DataTypes } from "sequelize";
import sequelize from "../configs/db-config";
import Rooms from "./rooms.model";

const Meetings =sequelize.define('Meetings',{
    ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    Description:{
        type:DataTypes.STRING,
        allowNull: false
    },
    StartTime:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    EndTime:{
        type:DataTypes.DATE,
        allowNull: false,
    },
});

Rooms.hasMany(Meetings, {foreignKey: "RoomID"});
//Meetings.belongsTo(Rooms);

export default  Meetings;