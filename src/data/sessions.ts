interface Session {
  name: string;
  description: string;
  numberParticipants: number;
  place: {
    city: string;
  };
  duration: number;
  pricePerPerson: number;
}
