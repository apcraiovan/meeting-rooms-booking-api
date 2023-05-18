const dbConfig = require("../config/db-config");

import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  { host: dbConfig.HOST, dialect: dbConfig.DIALECT },
  
);

