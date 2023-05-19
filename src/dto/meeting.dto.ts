export interface getMeetingDto {
    id: number;
    name: string;
    description: string;
    startTime: Date;
    endTime: Date;
    roomId: number;
}

export interface createMeetingDto {
    name: string;
    description: string;
    startTime: Date;
    endTime: Date;
    roomId: number;
}