import { useEffect, useState } from 'react';
import BookSlot from '../components/ui/Session/BookSlot';
import { getSession } from '../lib/api';
import type { Session } from '../lib/types';

function SessionPage() {
  const id = new URLSearchParams(window.location.search).get('id');
  const [session, setSession] = useState<Session>();
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  const statusName = {
    available: 'Disponible',
    booked: 'Réservé',
    cancelled: 'Annulé',
  };

  if (!id) {
    window.location.href = '/employeeDashboard';
    return;
  }

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await getSession(id);
      if (!data) {
        window.location.href = '/employeeDashboard';
        return;
      }
      setSession(data);
    };

    fetchSessions();
  }, [id]);

  if (!session) {
    return <div>Chargement...</div>;
  }

  return (
    <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4 border-b border-gray-300">
          <h1 className="text-3xl font-bold">{session.name}</h1>
        </div>
        <div className="flex justify-center gap-6 py-4 border-b border-gray-300">
          <p className="text-gray-500">Thème : {session.theme}</p>
          <p className="text-gray-500">Durée : {session.duration} min</p>
          <p className="text-gray-500">Prix : {session.price}€ / pers</p>
          <p className="text-gray-500">
            Participants : {session.min_participants} - {session.max_participants}
          </p>
        </div>
        <div className="border-b border-gray-300">
          <div className="justify-center text-justify" style={{ padding: '20px 40vh' }}>
            {session.description}
          </div>
        </div>
        <div className="flex justify-center gap-6 py-4 border-b border-gray-300">
          <h2 className="text-2xl font-bold">Créneaux</h2>
        </div>
        {session.slots.map((slot) => (
          <div key={slot.id} className="flex justify-center gap-6 py-4 items-center">
            <p className="text-gray-500">{slot.start_time}</p>
            <p className="text-gray-500">{statusName[slot.status]}</p>
          </div>
        ))}
        <div className="flex justify-center gap-6 py-4">
          <BookSlot session={session} />
        </div>
      </div>
    </main>
  );
}

export default SessionPage;
