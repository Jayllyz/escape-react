import { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex list-none p-0 m-0">
        <li className="mx-2 relative group">
          <a href="/" className="block">
            Accueil
          </a>
        </li>
        <li className="mx-2 relative group">
          <a href="/reservation" className="block">
            Réservation
          </a>
        </li>
        <li className="mx-2 relative">
          <button onClick={toggleDropdown} className="block" type="button">
            Session
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md">
              <li className="border-b">
                <a href="/session1" className="block px-4 py-2 hover:bg-gray-200">
                  Fuir Jason
                </a>
              </li>
              <li className="border-b">
                <a href="/session2" className="block px-4 py-2 hover:bg-gray-200">
                  Le labyrinthe
                </a>
              </li>
              <li>
                <a href="/session3" className="block px-4 py-2 hover:bg-gray-200">
                  L'asile
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="mx-2">
          <a href="/contact" className="block">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
