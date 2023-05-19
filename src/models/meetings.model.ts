// import {Table,DataType, Model,Column} from "sequelize-typescript";
// import Rooms from "./rooms.model";
// @Table({})

// class Meeting extends Model{
//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     })
//     ID!:number;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     Name!:string;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false
//     })
//     Description!:string;

//     @Column({
//         type: DataType.DATE,
//         allowNull: false
//     })
//     StartTime!:Date;

//     @Column({
//         type: DataType.DATE,
//         allowNull: false
//     })
//     EndTime!:Date;

//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false
//     })
//     RoomID!:number;
// }

// Rooms.hasMany(Meeting, {foreignKey: "RoomID"});
// //Meetings.belongsTo(Rooms);

// export default Meeting;

import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.config";
import Rooms from "./rooms.model";

const Meeting =sequelize.define('Meetings',{
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

Rooms.hasMany(Meeting, {foreignKey: "RoomID"});
//Meetings.belongsTo(Rooms);

export default  Meeting;