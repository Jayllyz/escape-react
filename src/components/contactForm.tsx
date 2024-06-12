import { useState } from 'react';

export default function ContactForm() {
  const [forlmData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(forlmData);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl">Nous contacter</h1>
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <label className="block" htmlFor="name">
          Nom
          <input
            className="block  border border-gray-400 rounded-sm"
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={forlmData.name}
            onChange={(e) => setFormData({ ...forlmData, name: e.target.value })}
          />
        </label>
        <label className="block" htmlFor="email">
          Email
          <input
            className="block border border-gray-400 rounded-sm"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={forlmData.email}
            onChange={(e) => setFormData({ ...forlmData, email: e.target.value })}
          />
        </label>
        <label className="block" htmlFor="message">
          Message
          <textarea
            className="block border border-gray-400 rounded-sm"
            id="message"
            name="message"
            value={forlmData.message}
            onChange={(e) => setFormData({ ...forlmData, message: e.target.value })}
          />
        </label>
        <button className="block bg-blue-500 text-white rounded-sm mt-4 p-2" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
