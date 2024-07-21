import { useState } from 'react';
import { createBooking } from '../../../lib/api';
import type { Session } from '../../../lib/types';

function Popup({ onClose, session }: { onClose: () => void; session: Session }) {
  async function handleBookSlot() {
    const email = document.getElementById('email') as HTMLInputElement;
    const time = document.getElementById('time') as HTMLSelectElement;
    const participants = document.getElementById('participants') as HTMLInputElement;

    if (!email || !time || !participants) return;

    const newBooking = {
      id: new Date().getTime().toString(),
      id_session: session.id,
      participants_count: Number.parseInt(participants.value),
      email: email.value,
      start_time: time.value,
      status: 'pending' as 'pending' | 'confirmed' | 'rejected',
    };

    await createBooking(newBooking);

    onClose();
  }

  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-white p-4 rounded-lg">
        <form>
          <label htmlFor="email" className="block mt-4 text-black">
            Votre email
            <input
              id="email"
              type="email"
              className="block w-full text-black border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
            />
          </label>
          <label htmlFor="time" className="block mt-4 text-black">
            Heure demandée
            <select
              id="time"
              className="block w-full text-black border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
            >
              {session.slots
                .filter((slot) => slot.status === 'available')
                .map((slot) => (
                  <option key={slot.id} value={slot.start_time}>
                    {slot.start_time}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor="participants" className="block mt-4 text-black">
            Nombre de participants
            <input
              id="participants"
              type="number"
              className="block w-full text-black border-black border-[1px] py-2 px-4 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              style={{ borderRadius: '5px' }}
            />
          </label>
          <div className="flex justify-center items-center gap-4">
            <button
              className="mt-4 px-4 py-2 text-white"
              style={{ background: '#0055de', borderRadius: '5px' }}
              type="button"
              onClick={handleBookSlot}
            >
              Envoyer
            </button>
            <button
              onClick={onClose}
              className="flex text-white mt-4 px-4 py-2 ml-4"
              style={{ background: '#757575', borderRadius: '5px' }}
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

function BookSlot({ session }: { session: Session }) {
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
          Faire une demande de réservation
        </button>
      )}
      {isPopupVisible && <Popup onClose={() => setPopupVisible(false)} session={session} />}
    </div>
  );
}

export default BookSlot;
