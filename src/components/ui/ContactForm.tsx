import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 rounded-lg shadow-lg">
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <label className="block" htmlFor="message">
          Message
          <textarea
            className="block border border-gray-400 rounded-sm"
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>
        <button className="block bg-blue-500 text-white rounded-sm mt-4 p-2" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
