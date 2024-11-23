import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
        <ScrollToTop />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
