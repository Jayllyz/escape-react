export type session = {
  id: number;
  theme: string;
  name: string;
  description: string;
  min_participants: number;
  max_participants: number;
  price: number;
  duration: number;
  slots: {
    id: number;
    start_time: string;
    status: 'available' | 'booked' | 'cancelled';
  }[];
};
