import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Mission from './component/Mission';
import Footer from './component/Footer';
import Services from './component/services';
import Subscribe from './component/subscribe';
import Partners from './component/partner';
import Slideshow from './component/slideshow/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './component/Projects';
import Policies from './component/Policies';
import Contact from './component/Contact';
import ServicesPage from './component/ServicesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Mission />
              <Services />
              <Slideshow />
              <Partners />
              <Subscribe />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
