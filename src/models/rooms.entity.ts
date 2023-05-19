import { Table, DataType, Model, Column } from "sequelize-typescript";
@Table
class Rooms extends Model {
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
