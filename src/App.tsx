import Booking from './components/Booking';
import Hero from './components/Hero';
import Sessions from './components/Sessions';
import ContactForm from './components/ui/ContactForm';

function App(): JSX.Element {
  return (
    <html lang="fr">
      <main>
        <Hero />
        <Sessions />
        <Booking />
        <div id="contact-section" className="m-8">
          <ContactForm />
        </div>
      </main>
    </html>
  );
}

export default App;
