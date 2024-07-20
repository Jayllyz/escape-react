import { updateSlot } from '../../lib/api';
import type { Session } from '../../lib/types';

function RestoreSlot({
  id_slot,
  session,
  setSession,
}: { id_slot: string; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleRestoreSlot() {
    const newSession = { ...session };
    const slot = newSession.slots.find((s) => s.id.toString() === id_slot);
    if (!slot) return;
    slot.status = 'available';
    await updateSlot(session.id.toString(), newSession);

    setSession((prevSession) => {
      if (!prevSession) return prevSession;
      return newSession;
    });
  }

  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#00b33c', borderRadius: '5px' }}
        type="button"
        onClick={handleRestoreSlot}
      >
        Rétablir
      </button>
    </div>
  );
}

export default RestoreSlot;
