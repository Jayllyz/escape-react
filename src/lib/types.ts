export type Session = {
  id: string;
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

export type Employee = {
  id: string;
  password: string;
  isAdmin: boolean;
  status: 'active' | 'inactive';
};
