function Header() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex list-none p-0 m-0">
        <li className="mx-2">
          <a href="/">Accueil</a>
        </li>
        <li className="mx-2">
          <a href="/reservation">Réservation</a>
        </li>
        <li className="mx-2">
          <a href="/session">Session</a>
        </li>
        <li className="mx-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
