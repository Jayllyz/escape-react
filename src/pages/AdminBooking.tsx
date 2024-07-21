import { useEffect, useState } from 'react';
import ConfirmBooking from '../components/ui/AdminBooking/ConfirmBooking';
import DenyBooking from '../components/ui/AdminBooking/DenyBooking';
import { getBookings, getSessions } from '../lib/api';
import type { Booking, Session } from '../lib/types';

function AdminSession() {
  const statusName = {
    pending: 'En attente',
    confirmed: 'Confirmé',
    rejected: 'Rejeté',
  };
  const [sessions, setSessions] = useState<Session[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataSession } = await getSessions();
      setSessions(dataSession);

      const { data: dataBooking } = await getBookings();
      setBookings(dataBooking);
    };

    fetchData();
  }, []);

  return (
    <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl font-bold">Gestion des demandes</h1>
        </div>
        {bookings.map((booking) => (
          <div key={booking.id} className="flex justify-center gap-6 py-4 border-b border-gray-300 items-center">
            <p className="text-gray-500">
              Session : {sessions.find((session) => session.id === booking.id_session)?.name}
            </p>
            <p className="text-gray-500">Email : {booking.email}</p>
            <p className="text-gray-500">Heure : {booking.start_time}</p>
            <p className="text-gray-500">Nombre de participants : {booking.participants_count}</p>
            <p className="text-gray-500">Statut : {statusName[booking.status]}</p>
            {booking.status === 'pending' && (
              <>
                <ConfirmBooking id_booking={booking.id} booking={booking} setBookings={setBookings} />
                <DenyBooking id_booking={booking.id} booking={booking} setBookings={setBookings} />
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminSession;
