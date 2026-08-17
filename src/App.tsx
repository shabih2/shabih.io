import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import { HowItWorks, Testimonials, FAQ } from './components/Sections';
import Footer from './components/Footer';
import RegisterBusiness from './components/RegisterBusiness';

function LandingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeatureCards />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
