import type { session } from '../../lib/types';

function RestoreSlot({
  id_slot,
  setSession,
}: { id_slot: string; setSession: React.Dispatch<React.SetStateAction<session | undefined>> }) {
  function handleRestoreSlot() {
    setSession((prevSession) => {
      if (!prevSession) return prevSession;
      const newSession = { ...prevSession };
      const slot = newSession.slots.find((s) => s.id.toString() === id_slot);
      if (!slot) return prevSession;
      slot.status = 'available';
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
