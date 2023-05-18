import { Sequelize } from "sequelize-typescript";
import Users from "../models/user_models";
import Participants from "../models/participants_models";

const sequelize = new Sequelize("test","root", "Fanelu2002!", {
    host:"localhost",
    port:4000,
    dialect:"mysql",
    models:[Users,Participants]
});

export default sequelize;
        

