import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Hero from './components/Hero';

import OurWork from './components/OurWork';
import workData from '../../assets/work-cards-data.json';

import './styles.css';

const HomePage = () => {
  return (
    <main id='home-page-container'>
      <Hero />
      <AboutUs />
      <OurWork workData={workData} />
      <Contact />
    </main>
  );
};

export default HomePage;
