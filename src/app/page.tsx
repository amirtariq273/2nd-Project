import Navbar from './components/navbar';
import Hero from './components/Hero';
import CardsSection from './components/cardSection';

const Home = () => (
  <div className="bg-[#1A2238] h-screen text-white">
    <Navbar />
    <Hero />
    <br />
    <CardsSection />
  </div>
);

export default Home;
