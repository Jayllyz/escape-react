import Booking from './components/Booking';
import Hero from './components/Hero';
import Sessions from './components/Sessions';
import ContactForm from './components/ui/ContactForm';
import { useEffect, useState } from 'react';

function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') !== 'false');

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false') {
      setDarkMode(false);
    }
  }, []);

  return (
    <html lang="fr">
      <main className={darkMode ? 'text-white' : ''} style={darkMode ? { backgroundColor: '#242424' } : {}}>
        <Hero />
        <Sessions />
        <Booking />
        <div className="py-8" id="contact-section">
          <ContactForm />
        </div>
      </main>
    </html>
  );
}

export default App;
