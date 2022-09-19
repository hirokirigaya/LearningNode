import { Sequelize } from "sequelize";
// Conection with database
const sequelize = new Sequelize("postapp", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default {
  Sequelize: Sequelize,
  sequelize: sequelize,
}