import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DoctorSection from './components/Doctor';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        <section id="services" >
          <Services onNavigate={scrollToSection} />
        </section>
        <section id="doctor">
          <DoctorSection />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id='why-us'>
          <WhyChooseUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
