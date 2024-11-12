"use client"
import { FC } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Footer from './components/Footer';

// Import other components as needed (About, Skills, etc.)

const Home: FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />


    <Footer/>
    </div>
  );
};

export default Home;
