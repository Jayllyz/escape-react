import SessionsTable from '../components/ui/SessionsTable';

function EmployeeDashboard() {
  return (
    <main>
      <div className="w-full text-center">
        <h1 className="text-4xl text-black font-bold">Gestion des sessions</h1>
      </div>

      <div className="mt-6 mb-6 flex items-center justify-center">
        <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
          Créer une session
        </button>
      </div>

      <div className="mt-6 mb-6 flex items-center justify-center">
        <SessionsTable />
      </div>
    </main>
  );
}

export default EmployeeDashboard;
