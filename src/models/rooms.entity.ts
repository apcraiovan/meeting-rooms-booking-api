import { Table, DataType, Model, Column, HasMany } from "sequelize-typescript";
import Meeting from "./meeting.entity";

@Table
class Rooms extends Model {
  @HasMany(() => Meeting, { as: "meetings" })
  @Column({
    type: DataType.INTEGER.UNSIGNED,

    autoIncrement: true,

    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,

    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,

    allowNull: false,
  })
  capacity!: number;

  @Column({
    type: DataType.STRING,

    allowNull: false,
  })
  description!: string;
}

export default Rooms;
