function EmployeeDashboard() {
  return (
    <main>
      <div className="w-full text-center">
        <h1 className="text-4xl text-black font-bold">Espace employé</h1>
      </div>

      <div className="flex justify-center items-center mt-6">
        <a href="/AdminSession">
          <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
            Gestion des sessions
          </button>
        </a>
      </div>

      <div className="mt-6 mb-6 flex items-center justify-center">
        <a href="/AdminEmployee">
          <button type="button" className="bg-gray-800 text-white p-3 w-[240px] rounded-md hover:bg-gray-600">
            Gestion des employés
          </button>
        </a>
      </div>
    </main>
  );
}

export default EmployeeDashboard;
