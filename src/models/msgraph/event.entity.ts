export interface Event {
  end: {
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
  organizer: {
    emailAddress: {
      name: string;
      address: string;
    };
  };
}
