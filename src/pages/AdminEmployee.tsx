import { useEffect, useState } from 'react';
import Activate from '../components/ui/AdminEmployee/Activate';
import Deactivate from '../components/ui/AdminEmployee/Deactivate';
import { getEmployees } from '../lib/api';
import type { Employee } from '../lib/types';

function AdminSession() {
  const statusName = {
    active: 'Actif',
    inactive: 'Inactif',
  };
  const [employees, setEmployees] = useState<Employee[]>([]);
  const isAdmin = sessionStorage.getItem('isAdmin');
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await getEmployees();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl font-bold">Gestion des employés</h1>
        </div>
        {employees.map((employee) => (
          <div key={employee.id} className="flex justify-center gap-6 py-4 border-b border-gray-300 items-center">
            <p className="text-gray-500">Email : {employee.id}</p>
            <p className="text-gray-500">Status : {statusName[employee.status]}</p>
            {isAdmin === 'true' && employee.status === 'active' && (
              <Deactivate id={employee.id} employees={employees} setEmployees={setEmployees} />
            )}
            {isAdmin === 'true' && employee.status === 'inactive' && (
              <Activate id={employee.id} employees={employees} setEmployees={setEmployees} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminSession;
