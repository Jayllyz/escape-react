import { useState } from 'react';
import { updateSlot } from '../../../lib/api';
import type { Session } from '../../../lib/types';

function Popup({
  onClose,
  session,
  setSession,
}: { onClose: () => void; session: Session; setSession: React.Dispatch<React.SetStateAction<Session | undefined>> }) {
  async function handleEditSession() {
    const theme = document.getElementById('theme') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const description = document.getElementById('description') as HTMLInputElement;
    const price = document.getElementById('price') as HTMLInputElement;
    const duration = document.getElementById('duration') as HTMLInputElement;
    const min_participants = document.getElementById('min_participants') as HTMLInputElement;
    const max_participants = document.getElementById('max_participants') as HTMLInputElement;

    if (!theme || !name || !description || !price || !duration || !min_participants || !max_participants) return;

    const newSession = {
      ...session,
      theme: theme.value,
      name: name.value,
      description: description.value,
      price: Number.parseInt(price.value),
      duration: Number.parseInt(duration.value),
      min_participants: Number.parseInt(min_participants.value),
      max_participants: Number.parseInt(max_participants.value),
    };

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
          <label htmlFor="theme" className="block mt-4">
            Thème
            <input
              id="theme"
              type="text"
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.theme}
            />
          </label>
          <label htmlFor="name" className="block mt-4">
            Nom
            <input
              id="name"
              type="text"
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.name}
            />
          </label>
          <label htmlFor="description" className="block mt-4">
            Description
            <textarea
              id="description"
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.description}
            />
          </label>
          <label htmlFor="price" className="block mt-4">
            Prix
            <input
              id="price"
              type="number"
              min={0}
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.price}
            />
          </label>
          <label htmlFor="duration" className="block mt-4">
            Durée
            <input
              id="duration"
              type="number"
              min={0}
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.duration}
            />
          </label>
          <label htmlFor="min_participants" className="block mt-4">
            Participants min
            <input
              id="min_participants"
              type="number"
              min={0}
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.min_participants}
            />
          </label>
          <label htmlFor="max_participants" className="block mt-4">
            Participants max
            <input
              id="max_participants"
              type="number"
              min={0}
              className="block w-full border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
              defaultValue={session.max_participants}
            />
          </label>
          <div className="flex justify-center items-center gap-4">
            <button
              className="mt-4 px-4 py-2 text-white"
              style={{ background: '#0055de', borderRadius: '5px' }}
              type="button"
              onClick={handleEditSession}
            >
              Modifier
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

function EditSession({
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
          Modifier la session
        </button>
      )}
      {isPopupVisible && <Popup onClose={() => setPopupVisible(false)} session={session} setSession={setSession} />}
    </div>
  );
}

export default EditSession;
