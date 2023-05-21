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

// These comments are to get rid of the shadowing warning at testing with sequelize models using setters and getters, both methods work
// import { Table, DataType, Model, Column } from "sequelize-typescript";

// @Table({ modelName: "Rooms" })
// class Rooms extends Model {
//   @Column({
//     type: DataType.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   get id(): number {
//     return this.getDataValue("id");
//   }
//   set id(value: number) {
//     this.setDataValue("id", value);
//   }

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   get name(): string {
//     return this.getDataValue("name");
//   }
//   set name(value: string) {
//     this.setDataValue("name", value);
//   }

//   @Column({
//     type: DataType.INTEGER.UNSIGNED,
//     allowNull: false,
//   })
//   get capacity(): number {
//     return this.getDataValue("capacity");
//   }
//   set capacity(value: number) {
//     this.setDataValue("capacity", value);
//   }

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   get description(): string {
//     return this.getDataValue("description");
//   }
//   set description(value: string) {
//     this.setDataValue("description", value);
//   }
// }

// export default Rooms;
