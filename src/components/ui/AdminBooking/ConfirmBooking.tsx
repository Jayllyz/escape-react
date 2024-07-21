import { updateBooking } from '../../../lib/api';
import type { Booking } from '../../../lib/types';

function ConfirmBooking({
  id_booking,
  booking,
  setBookings,
}: { id_booking: string; booking: Booking; setBookings: React.Dispatch<React.SetStateAction<Booking[]>> }) {
  async function handleConfirmBooking() {
    const data = { ...booking, status: 'confirmed' as const };
    await updateBooking(id_booking, data);

    setBookings((prev) => prev.map((e) => (e.id === id_booking ? data : e)));
  }

  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#00b33c', borderRadius: '5px' }}
        type="button"
        onClick={handleConfirmBooking}
      >
        Valider
      </button>
    </div>
  );
}

export default ConfirmBooking;
