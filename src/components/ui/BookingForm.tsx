import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: '',
    numberParticipants: 0,
    isIndividual: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md border-black border-[1px] border-opacity-30 ">
      <h1 className="text-2xl font-semibold mb-6 text-center">Réserver dès maintenant !</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="email@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700" htmlFor="date">
              Date
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="date"
              id="date"
              name="date"
              autoComplete="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700" htmlFor="time">
              Heure
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="time"
              id="time"
              name="time"
              autoComplete="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700" htmlFor="numberParticipants">
            Nombres de participants
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="number"
            id="numberParticipants"
            name="numberParticipants"
            autoComplete="numberParticipants"
            value={formData.numberParticipants}
            onChange={(e) => setFormData({ ...formData, numberParticipants: Number.parseInt(e.target.value) })}
          />
        </div>
        <div className="w-full flex items-center gap-4">
          <input
            className="w-4 h-4 mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="checkbox"
            id="isIndividual"
            name="isIndividual"
            autoComplete="isIndividual"
            checked={formData.isIndividual}
            onChange={(e) => setFormData({ ...formData, isIndividual: e.target.checked })}
          />
          <label className="block text-sm font-medium text-gray-700" htmlFor="isIndividual">
            Je suis un particulier
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="precision">
            Précisions
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="precision"
            name="precision"
            placeholder="Votre message..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-[100px] flex justify-center py-2 px-4 border border-transparent  rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
