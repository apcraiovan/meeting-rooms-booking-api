export interface UpdateMeetingRoomDto {
  currentRoomData: {
    id: string;
    name?: string;
    description?: string;
    capacity?: number;
    email: string;
  };
  newRoomData: {
    name?: string;
    description?: string;
    capacity?: number;
    email?: string;
  };
}
