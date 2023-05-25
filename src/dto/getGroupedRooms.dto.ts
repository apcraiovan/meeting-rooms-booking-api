export interface GetRoomsGroupedDto {
  id: number;
  name: string;
  capacity: number;
  description: string;
  meetings: {
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    participants: string[];
  }[];
}
export interface TransferMeetingsDto {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  participants: string[];
}
