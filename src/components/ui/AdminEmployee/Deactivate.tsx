import { updateEmployee } from '../../../lib/api';
import type { Employee } from '../../../lib/types';

function Deactivate({
  id,
  employees,
  setEmployees,
}: { id: string; employees: Employee[]; setEmployees: React.Dispatch<React.SetStateAction<Employee[]>> }) {
  async function handleDeactivate() {
    const employee = employees.find((e) => e.id === id);
    if (!employee) return;

    const data = { ...employee, status: 'inactive' as const };
    await updateEmployee(id, data);

    setEmployees((prev) => prev.map((e) => (e.id === id ? data : e)));
  }

  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#f07400', borderRadius: '5px' }}
        type="button"
        onClick={handleDeactivate}
      >
        Désactiver
      </button>
    </div>
  );
}

export default Deactivate;
