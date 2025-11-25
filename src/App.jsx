import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Savings from './components/Savings';
import WhyChooseUs from './components/WhyChooseUs';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <Savings />
        <WhyChooseUs />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
