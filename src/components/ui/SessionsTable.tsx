import { useEffect, useState } from 'react';
import { getSessions } from '../../lib/api';

function SessionsTable() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const sessionsQuery = getSessions();
    sessionsQuery.then(() => {
      setSessions(sessions);
    });
  }, [sessions]);

  return (
    <table className="max-w-[1000px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 scroll-auto">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
          <td className="px-6 py-4">
            <button type="button">MODIFIER</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SessionsTable;
