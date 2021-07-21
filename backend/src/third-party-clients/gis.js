import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.GIS_DATABASE,
  process.env.GIS_USER,
  encodeURIComponent(process.env.GIS_PASSWORD),
  {
    host: process.env.GIS_SERVER,
    dialect: "mariadb",
    port: 3360,
    dialectOptions: {},
  }
);

export default sequelize;
