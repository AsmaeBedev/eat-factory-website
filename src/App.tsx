import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BoissonsBanner from './components/BoissonsBanner';
import Atmosphere from './components/Atmosphere';
import Services from './components/Services';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider light />
        <Menu />
        <BoissonsBanner />
        <SectionDivider />
        <Atmosphere />
        <SectionDivider light />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
