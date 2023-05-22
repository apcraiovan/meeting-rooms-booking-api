export interface CreateEventDto {
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  attendees: { emailAddress: { address: string } }[];
}
