import { useEffect, useState } from 'react';
import { getSessions } from '../../lib/api';
import type { session } from '../../lib/types';

function SessionsTable() {
  const [sessions, setSessions] = useState<session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await getSessions();
      setSessions(data);
    };

    fetchSessions();
  }, []);

  return (
    <table className="max-w-[1000px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nom
          </th>
          <th scope="col" className="px-6 py-3">
            Thème
          </th>
          <th scope="col" className="px-6 py-3">
            Durée
          </th>
          <th scope="col" className="px-6 py-3">
            Prix
          </th>
        </tr>
      </thead>
      <tbody>
        {sessions.map((session) => (
          <tr key={session.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 scroll-auto">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <a href={`/employeeSession?id=${session.id}`}>{session.name}</a>
            </th>
            <td className="px-6 py-4">{session.theme}</td>
            <td className="px-6 py-4">{session.duration}</td>
            <td className="px-6 py-4">{session.price} / pers</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SessionsTable;
