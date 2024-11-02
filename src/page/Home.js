import React, { useEffect } from 'react';
import Slideer from '../layout/Slideer';
import Header from '../layout/Header';
import Product from '../layout/Product';
import MegaMenu from '../layout/MegaMenu';
import Footer from '../layout/Footer';
import '../css/style.css';
import '../css/test.css';
import About from '../layout/About';
export default function Home({ cartItemCount }) {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    let currentSection = 0;

    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
      } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
      }
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <div className="scroll-container ">

      <section className="scroll-section header_content">
        <Header cartItemCount={cartItemCount} />
      </section>
      <section className='scroll-section header_content_megamenu'>
        <MegaMenu />
      </section>
      <section>
        <Slideer />
      </section>
      <section className="scroll-section">
        <About />
      </section>
      <section className="scroll-section">
        <Product />
      </section>
      <section className="scroll-section">
        <Footer />
      </section>
    </div>
  );
}
