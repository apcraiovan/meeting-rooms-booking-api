export interface Event {
  id : string,
  body: {
    contentType: string;
    content : string;
  };  end: {
    dateTime: string;
    timeZone: string;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  attendees: {
    emailAddress: {
      name: string;
      address: string;
    };
  }[];
}
