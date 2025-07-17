import { useEffect } from 'react'
import './App.css'
import Header from './components/common/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Delicious from './components/Delicious'
import BestSellers from './components/BestSellers'
import Footer from './components/common/Footer'
import Craving from './components/Craving'
import Tasty from './components/Tasty'
import FoodDelivery from './components/FoodDelivery'
import HowItWorks from './components/HowItWorks'
import OurMenu from './components/OurMenu'
import OurGallery from './components/OurGallery'
import Testimonial from './components/Testimonial'
import BackToTop from './components/common/BackToTop'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Delicious />
      <BestSellers />
      <OurMenu />
      <Tasty />
      <FoodDelivery />
      <HowItWorks />
      <Testimonial />
      <OurGallery />
      <Craving />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App