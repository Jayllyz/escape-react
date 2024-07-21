import { updateSlot } from '../../../lib/api';
import type { Session } from '../../../lib/types';

function BookSlot({
  id_slot,
  session,
  setSession,
}: { id_slot: string; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleBookSlot() {
    const newSession = { ...session };
    const slot = newSession.slots.find((s) => s.id.toString() === id_slot);
    if (!slot) return;
    slot.status = 'booked';
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
        style={{ backgroundColor: '#00b33c', borderRadius: '5px' }}
        type="button"
        onClick={handleBookSlot}
      >
        Réserver
      </button>
    </div>
  );
}

export default BookSlot;
