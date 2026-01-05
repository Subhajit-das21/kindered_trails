
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Featured from './components/Featured';
import Services from './components/Services';
import CareAssistant from './components/CareAssistant';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#F4A261] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Featured />
        <Services />
        <CareAssistant />
        <Story />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
