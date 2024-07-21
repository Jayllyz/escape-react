import { useEffect, useState } from 'react';

function EmployeeDashboard() {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  return (
    <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl font-bold">Espace employé</h1>
        </div>

        <div className="flex justify-center items-center mt-6">
          <a href="/AdminSession">
            <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
              Gestion des sessions
            </button>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <a href="/AdminEmployee">
            <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
              Gestion des employés
            </button>
          </a>
        </div>

        <div className="mt-6 mb-6 flex items-center justify-center">
          <a href="/AdminBooking">
            <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
              Gestion des demandes
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default EmployeeDashboard;
