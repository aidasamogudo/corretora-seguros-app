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

// Importe as páginas que faltam (crie elas depois)
// import FAQ from './pages/FAQ';
// import Simular from './pages/Simular';
// import Reclamacoes from './pages/Reclamacoes';
// import Blog from './pages/Blog';
// import Vagas from './pages/Vagas';
// import Termos from './pages/Termos';
// import Privacidade from './pages/Privacidade';
// import Cookies from './pages/Cookies';
// import Dados from './pages/Dados';

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
            
            {/* Rotas que você pode adicionar depois */}
            {/* <Route path="/faq" element={<FAQ />} />
            <Route path="/simular" element={<Simular />} />
            <Route path="/reclamacoes" element={<Reclamacoes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dados" element={<Dados />} /> */}
            
            {/* Rota para página não encontrada (404) */}
            <Route path="*" element={<div style={{padding: '50px', textAlign: 'center'}}><h2>Página não encontrada</h2><p>A página que você procura não existe.</p><a href="/" style={{color: '#D1B274'}}>Voltar para Home</a></div>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;