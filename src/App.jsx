import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;