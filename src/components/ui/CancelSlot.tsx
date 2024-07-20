import type { Session } from '../../lib/types';
import { updateSlot } from '../../lib/api';

function CancelSlot({
  id_slot,
  session,
  setSession,
}: { id_slot: string; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleCancelSlot() {
    const newSession = { ...session };
    const slot = newSession.slots.find((s) => s.id.toString() === id_slot);
    if (!slot) return;
    slot.status = 'cancelled';
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
        style={{ backgroundColor: '#FF0000', borderRadius: '5px' }}
        type="button"
        onClick={handleCancelSlot}
      >
        Suspendre
      </button>
    </div>
  );
}

export default CancelSlot;
