import { updateSlot } from '../../../lib/api';
import type { Session } from '../../../lib/types';

function DeleteSlot({
  id_slot,
  session,
  setSession,
}: { id_slot: string; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleDeleteSlot() {
    const newSession = { ...session };
    const slot = newSession.slots.filter((s) => s.id.toString() !== id_slot);
    newSession.slots = slot;
    await updateSlot(session.id, newSession);

    setSession((prevSession) => {
      if (!prevSession) return prevSession;
      return newSession;
    });
  }
  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#ff0000', borderRadius: '5px' }}
        type="button"
        onClick={handleDeleteSlot}
      >
        Supprimer
      </button>
    </div>
  );
}

export default DeleteSlot;
