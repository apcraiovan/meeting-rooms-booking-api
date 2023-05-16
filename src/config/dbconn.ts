import { Sequelize } from "sequelize";
const sequelize=new Sequelize("test",'root',"Fanelu2002!",{
            host:"localhost",
            dialect:"mysql",
            port:4000
        });
export default sequelize;
        


