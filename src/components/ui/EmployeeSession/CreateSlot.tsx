import { useState } from 'react';
import { updateSlot } from '../../../lib/api';
import type { Session } from '../../../lib/types';

function Popup({
  onClose,
  session,
  setSession,
}: { onClose: () => void; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleCreateSlot() {
    const time = document.getElementById('time') as HTMLInputElement;
    if (!time) return;
    const newSession = { ...session };
    const slot = {
      id: new Date().getTime(),
      start_time: time.value,
      status: 'available' as 'available' | 'booked' | 'cancelled',
    };
    newSession.slots.push(slot);

    await updateSlot(session.id, newSession);

    setSession((prevSession) => {
      if (!prevSession) return prevSession;
      return newSession;
    });

    onClose();
  }

  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-white p-4 rounded-lg">
        <form>
          <label htmlFor="time" className="block mt-4">
            Heure
            <input
              id="time"
              type="time"
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
            />
          </label>
          <div className="flex justify-center items-center gap-4">
            <button
              className="mt-4 px-4 py-2 text-white"
              style={{ background: '#0055de', borderRadius: '5px' }}
              type="button"
              onClick={handleCreateSlot}
            >
              Ajouter
            </button>
            <button
              onClick={onClose}
              className="flex text-white mt-4 px-4 py-2 ml-4"
              style={{ background: '#ff0000', borderRadius: '5px' }}
              type="button"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CreateSlot({
  session,
  setSession,
}: { session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  return (
    <div className="flex justify-center flex-col">
      {!isPopupVisible && (
        <button
          onClick={() => setPopupVisible(true)}
          className="text-white px-4 py-2 my-4"
          style={{ background: '#0055de', borderRadius: '5px' }}
          type="button"
        >
          Ajouter un créneau
        </button>
      )}
      {isPopupVisible && <Popup onClose={() => setPopupVisible(false)} session={session} setSession={setSession} />}
    </div>
  );
}

export default CreateSlot;
