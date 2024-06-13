import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Sessions from './components/Sessions';
import Hero from './components/Hero';
import ContactForm from './components/ui/ContactForm';

function App() {
  return (
    <html lang="fr">
      <main>
        <Header />
        <Hero />
        <Sessions />
        <Booking />
        <div id='contact-section' className="m-8">
          <ContactForm  />
        </div>
        <Footer />
      </main>
    </html>
  );
}

export default App;
