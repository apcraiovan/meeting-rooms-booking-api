import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  "mysql://root:root1234@localhost:3306/mySQLInternshipApp"
);
export default sequelize;
