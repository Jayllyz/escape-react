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

export type Booking = {
  id: string;
  id_session: string;
  participants_count: number;
  email: string;
  start_time: string;
  status: 'pending' | 'confirmed' | 'rejected';
};
