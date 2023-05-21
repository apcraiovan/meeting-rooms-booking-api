export interface CreateEventDto {
  eventName: string;
  eventDescription: string;
  eventStartTime: Date;
  eventEndTime: Date;
  attendees: { emailAddress: { address: string } }[];
}
