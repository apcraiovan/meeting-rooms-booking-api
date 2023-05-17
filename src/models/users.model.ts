import {  DataTypes } from "sequelize";
import sequelize from "../configs/db-config";
const Users=sequelize.define('Users',{
    ID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});
export default  Users;