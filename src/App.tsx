import Booking from './components/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import Sessions from './components/Sessions';
import ContactForm from './components/ui/ContactForm';

function App() {
  return (
    <html lang="fr">
      <main>
        <header>
          <Header />
        </header>
        <div>
          <h1 className="flex justify-center bg-slate-400 py-4 text-white text-3xl font-bold">Nos Sessions</h1>
        </div>
        <Sessions />
        <Booking />
        <div className="m-8">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </html>
  );
}

export default App;
