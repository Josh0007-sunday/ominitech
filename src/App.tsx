import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Mission from './component/Mission';
import Footer from './component/Footer';
import Services from './component/services';
import Subscribe from './component/subscribe';
import Partners from './component/partner';
import Slideshow from './component/slideshow/page';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Slideshow />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
