import type { session } from '../../lib/types';

function CancelSlot({
  id_slot,
  setSession,
}: { id_slot: string; setSession: React.Dispatch<React.SetStateAction<session | undefined>> }) {
  async function handleCancelSlot() {
    setSession((prevSession) => {
      if (!prevSession) return prevSession;
      const newSession = { ...prevSession };
      const slot = newSession.slots.find((s) => s.id.toString() === id_slot);
      if (!slot) return prevSession;
      slot.status = 'cancelled';
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
