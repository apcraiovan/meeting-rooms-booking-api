export interface GetMeetingDto {
    ID: number;
    Name: string;
    Description: string;
    StartTime: Date;
    EndTime: Date;
    RoomID: number;
}

export interface CreateMeetingDto {
    Name: string;
    Description: string;
    StartTime: Date;
    EndTime: Date;
    RoomID: number;
}