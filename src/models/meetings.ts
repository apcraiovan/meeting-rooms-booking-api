import { DataTypes } from "sequelize";
import sequelize from "../config/db-config";

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
    RoomID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
export default  Meetings;