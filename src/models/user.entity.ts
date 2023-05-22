import {
  Table,
  DataType,
  Model,
  Column,
  BelongsToMany,
} from "sequelize-typescript";
import Participants from "./participants.entity";
import Meeting from "./meeting.entity";
@Table
class Users extends Model {
  @BelongsToMany(() => Meeting, { as: "userId", through: () => Participants })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;
}
export default Users;
