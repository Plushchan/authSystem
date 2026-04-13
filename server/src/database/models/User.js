import connection from "../database.js";
import { DataTypes } from "sequelize";

const User = connection.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rule: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false,
  },
});

export default User;
