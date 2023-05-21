export interface UpdateMeetingRoomDto {
  currentRoomData: {
    name?: string;
    description?: string;
    capacity?: number;
    email: string;
  };
  newRoomData : {
    name?: string;
    description?: string;
    capacity?: number;
    email?: string;
  }
}
