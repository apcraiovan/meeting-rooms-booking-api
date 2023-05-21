import {
  DataType,
  Table,
  Column,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import Users from "./user.entity";
import Meeting from "./meeting.entity";
@Table({})
class Participants extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;
  @ForeignKey(() => Users)
  @Column
  userId!: number;
  @ForeignKey(() => Meeting)
  @Column
  meetId!: number;
}
export default Participants;