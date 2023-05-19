import {sequelize} from "./config/mysql.config";
import app from "./app";

sequelize
  .authenticate()
  .then(async () => {
    console.log("authenticated");
    sequelize
      .sync()
      .then(async() => {
        console.log("success");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  })
  .catch((err: Error) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("server started");
});
