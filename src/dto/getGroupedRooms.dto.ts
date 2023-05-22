export interface GetRoomsGroupedDto {
  id: number;
  name: string;
  capacity: number;
  meetings: {
    name: string;
    description: string;
    startTime: string;
    endTime: string;
  }[];
}
