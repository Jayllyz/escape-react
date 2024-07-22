import { useEffect, useState } from 'react';
import { getSessions } from '../lib/api';
import type { Session } from '../lib/types';

export default function Header(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    const fetchSessions = async () => {
      const { data } = await getSessions();
      setSessions(data);
    };

    fetchSessions();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    window.location.reload();
  };

  const disconnect = () => {
    sessionStorage.removeItem('loggedIn');
    window.location.href = '/';
  };

  return (
    <header>
      <nav className="grid py-8 items-center justify-center bg-slate-500 text-white">
        <h1 className="text-2xl font-bold text-white bg-slate-500 pl-8 pr-4 py-2 text-center">La Maison Horrifique</h1>
        <ul className="flex gap-8 list-none p-0 m-0">
          <li className="mx-2 relative group">
            <a href="/" className="block">
              Accueil
            </a>
          </li>
          <li className="mx-2 relative group">
            <a href="/#booking-section" className="block">
              Réservation
            </a>
          </li>
          <li className="mx-2 relative">
            <button onClick={toggleDropdown} className="block" type="button">
              Sessions
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-500 shadow-md">
                {sessions.map((session) => (
                  <li key={session.id} className="border-b">
                    <a
                      href={`/session?id=${session.id}`}
                      className="block px-4 py-2 hover:bg-gray-200 hover:text-black"
                    >
                      {session.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mx-2">
            <a href="/#contact-section" className="block">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a href="/login" className="block">
              Accès employés
            </a>
          </li>
        </ul>
        {sessionStorage.getItem('loggedIn') && (
          <button
            className="absolute bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500"
            style={{ right: '10rem', top: '1rem', borderRadius: '5px' }}
            type="button"
            onClick={disconnect}
          >
            Déconnexion
          </button>
        )}
        <button
          onClick={toggleDarkMode}
          className="absolute bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          style={{ right: '1rem', top: '1rem', borderRadius: '5px' }}
          type="button"
        >
          {darkMode ? 'Mode clair' : 'Mode sombre'}
        </button>
      </nav>
    </header>
  );
}
