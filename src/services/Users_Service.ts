import { Model } from "sequelize";
import Users from "../models/User_Moedel";
export const AddUser=async(name:string):Promise<Model>=>{
    return await Users.create({Name:name});
}
