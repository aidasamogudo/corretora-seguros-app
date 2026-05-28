import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Contactos from './pages/Contactos';
import Parceiros from './pages/Parceiros';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/parceiros" element={<Parceiros />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;