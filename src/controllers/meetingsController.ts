import { Router } from "express";
import Meetings from "../models/meetings";

const route = Router();
const Meeting = new Meetings();

export default route;
