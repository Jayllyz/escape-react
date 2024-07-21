import { updateBooking } from '../../../lib/api';
import type { Booking } from '../../../lib/types';

function DenyBooking({
  id_booking,
  booking,
  setBookings,
}: { id_booking: string; booking: Booking; setBookings: React.Dispatch<React.SetStateAction<Booking[]>> }) {
  async function handleDenyBooking() {
    const data = { ...booking, status: 'rejected' as const };
    await updateBooking(id_booking, data);

    setBookings((prev) => prev.map((e) => (e.id === id_booking ? data : e)));
  }

  return (
    <div>
      <button
        className="text-white font-bold py-2 px-4"
        style={{ backgroundColor: '#ff0000', borderRadius: '5px' }}
        type="button"
        onClick={handleDenyBooking}
      >
        Rejeter
      </button>
    </div>
  );
}

export default DenyBooking;
