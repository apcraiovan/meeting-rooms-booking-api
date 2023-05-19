import { Request,Response, NextFunction } from "express";


export class MeetingController{

    async postMeeting(req:Request, res:Response, next:NextFunction ){
        res.send("post_meeting");
    };

}
