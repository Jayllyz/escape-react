import { useEffect, useState } from 'react';
import CreateSession from '../components/ui/AdminSession/CreateSession';
import SessionsTable from '../components/ui/SessionsTable';
import { getSessions } from '../lib/api';
import type { Session } from '../lib/types';

function AdminSession() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await getSessions();
      setSessions(data);
    };

    fetchSessions();
  }, []);
  return (
    <main>
      <div className="w-full text-center">
        <h1 className="text-4xl text-black font-bold">Gestion des sessions</h1>
      </div>

      <div className="mt-6 mb-6 flex items-center justify-center">
        <CreateSession setSession={setSessions} />
      </div>

      <div className="mt-6 mb-6 flex items-center justify-center">
        <SessionsTable sessions={sessions} />
      </div>
    </main>
  );
}

export default AdminSession;
