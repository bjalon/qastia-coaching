// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation.tsx';
import Home from './pages/Home';
import References from './pages/References';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;