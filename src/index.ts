import express from "express";
import sequelize from "./config/db-config";
import UserRepository from "./repository/user.repository";
const app = express();
sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(async() => {
        console.log("success");
        const r=new UserRepository();
        const data=await r.GetUsers([1,2]);
        console.log(data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  })
  .catch((err: Error) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server started");
});
;