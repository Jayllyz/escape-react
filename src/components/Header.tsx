import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <a href="#booking-section" className="block">
              Réservation
            </a>
          </li>
          <li className="mx-2 relative">
            <button onClick={toggleDropdown} className="block" type="button">
              Sessions
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-500 shadow-md">
                <li className="border-b">
                  <a href="#Fuir Jason" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">
                    Fuir Jason
                  </a>
                </li>
                <li className="border-b">
                  <a href="#Le labyrinthe" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">
                    Le labyrinthe
                  </a>
                </li>
                <li>
                  <a href="#L'asile" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">
                    L'asile
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="mx-2">
            <a href="#contact-section" className="block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
