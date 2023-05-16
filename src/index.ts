import express from "express"
import morgan from "morgan"
import sequelize from "./config/db-config";
import Users from "./models/user";
 const app=express();
app.use(morgan('tiny'));
sequelize.authenticate().then(async ()=>{
    console.log('authenticated');
     sequelize.sync().then(()=>{
        console.log('success');
     }).catch((err)=>{
        console.log(err);
     })
}).catch((err)=>{
    console.log(err);
})
app.listen(5000,()=>{
    console.log('server started');
})
