import { updateEmployee } from '../../../lib/api';
import type { Employee } from '../../../lib/types';

function Activate({
  id,
  employees,
  setEmployees,
}: { id: string; employees: Employee[]; setEmployees: React.Dispatch<React.SetStateAction<Employee[]>> }) {
  async function handleActivate() {
    const employee = employees.find((e) => e.id === id);
    if (!employee) return;

    const data = { ...employee, status: 'active' as const };
    await updateEmployee(id, data);

    setEmployees((prev) => prev.map((e) => (e.id === id ? data : e)));
  }

  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#00b33c', borderRadius: '5px' }}
        type="button"
        onClick={handleActivate}
      >
        Activer
      </button>
    </div>
  );
}

export default Activate;
