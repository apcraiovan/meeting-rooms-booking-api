import sequelize from "../config/db-config";
import { DataTypes } from "sequelize";
import Users from "./users.model";
import Meetings from "./meetings.model";

const Participants = sequelize.define("Participants", {
  ID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
});
Users.belongsToMany(Meetings, { through: Participants, foreignKey: "USER_ID" });
Meetings.belongsToMany(Users, { through: Participants, foreignKey: "MEET_ID" });

export default Participants;
