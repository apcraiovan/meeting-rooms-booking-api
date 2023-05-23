import {
  Table,
  DataType,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Rooms from "./rooms.entity";

@Table
class Meetings extends Model {
  @BelongsTo(() => Rooms, { as: "meetings" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startTime!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endTime!: Date;

  @ForeignKey(() => Rooms)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roomId!: number;
}

export default Meetings;
