import {
  Table,
  DataType,
  Model,
  Column,
  BelongsToMany,
} from "sequelize-typescript";
import Participants from "./participants.entity";
import Users from "./user.entity";
@Table({})
class Meeting extends Model {
  @BelongsToMany(() => Users, { as: "meetId", through: () => Participants })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roomId!: number;
}

//Rooms.hasMany(Meeting, {foreignKey: "RoomID"});
//Meetings.belongsTo(Rooms);

export default Meeting;
