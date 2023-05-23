import { Table, DataType, Model, Column, HasMany } from "sequelize-typescript";
import Meetings from "./meetings.entity";

@Table
class Rooms extends Model {
  @HasMany(() => Meetings, { as: "meetings" })
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
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;
}

export default Rooms;
