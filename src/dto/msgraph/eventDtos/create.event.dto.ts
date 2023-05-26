export interface CreateEventDto {
  name: string;
  description: {
    contentType: string;
    content : string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  attendees: { emailAddress: { address: string } }[];
}
