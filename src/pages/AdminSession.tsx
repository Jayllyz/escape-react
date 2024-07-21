import { useEffect, useState } from 'react';
import CreateSession from '../components/ui/AdminSession/CreateSession';
import SessionsTable from '../components/ui/SessionsTable';
import { getSessions } from '../lib/api';
import type { Session } from '../lib/types';

function AdminSession() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await getSessions();
      setSessions(data);
    };

    fetchSessions();
  }, []);
  return (
    <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold">Gestion des sessions</h1>
        </div>

        <div className="mt-6 mb-6 flex items-center justify-center">
          <CreateSession setSession={setSessions} />
        </div>

        <div className="mt-6 mb-6 flex items-center justify-center">
          <SessionsTable sessions={sessions} />
        </div>
      </div>
    </main>
  );
}

export default AdminSession;
