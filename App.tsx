import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;