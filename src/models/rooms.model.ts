// import { Table, Column, DataType, Model } from "sequelize-typescript";

// @Table({})
// class Rooms extends Model {
//   @Column({
//     type: DataType.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   })
//   id!: number;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name!: string;
// }

// export default Rooms;
import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.config";
const Rooms = sequelize.define(
  "Room",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Rooms"
  }
);

export default Rooms;