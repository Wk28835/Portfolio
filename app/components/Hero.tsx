import React from 'react';
import Image from 'next/image';




const Hero: React.FC = () => {
  return (
    <div>
    <section id="hero" className="relative h-screen flex items-center justify-center text-yellow-500 bg-black parallax parallax-bg" >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="text-center z-10 px-6">
        <Image src="/mine.jpg" alt="Your Profile" className="rounded-full mx-auto mb-6 w-60 h-60 border-4 border-white fade-in delay-1" />
        <h1 className="text-5xl font-bold mb-4 slide-in-left delay-2">Hi, I&apos;m a Software Engineer</h1>
        <p className="text-xl mb-6 slide-in-left delay-3">I&apos;m a Mern Stack Developer, passionate about crafting seamless, interactive web experiences.</p>
        <a href="#about" className="bg-yellow-700 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300 hover-scale slide-in-left delay-4">Learn More</a>
      </div>
    </section>
    
    {/* Project Section */}
        <section id="projects" className="py-20 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-yellow-400 font-semibold">Projects</h2>
          <p className="text-xl text-yellow-500">Check out some of the projects I&apos;ve worked on.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {/* Project 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg transform  transition-all duration-1000 project-card">
            <Image src="https://i0.wp.com/www.lovelycoding.org/wp-content/uploads/2022/09/Restaurant-Management-System.webp?fit=640%2C427&ssl=1" alt="Project 1" className="rounded-lg mb-4" />
            <h3 className="text-xl text-yellow-600 font-semibold mb-2">Project 1</h3>
            <p className="text-gray-500 mb-2">Restaurent Managment System</p>
           
          </div>

          {/* Project 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg transform  transition-all duration-1000 project-card">
            <Image src="/gift.jpg" alt="Project 2" className="rounded-lg mb-4" />
            <h3 className="text-xl text-yellow-600 font-semibold mb-2">Project 2</h3>
            <p className="text-gray-500 mb-2">Ecommerece Gift Shop with Stripe Integration</p>
           
          </div>

          {/* Project 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg transform  transition-all duration-1000 project-card">
            <Image src="https://image.winudf.com/v2/image1/aWN2LnJlc3VtZS5jdXJyaWN1bHVtdml0YWVfc2NyZWVuXzBfMTY0MTIwOTYwOV8wMjM/screen-0.jpg?fakeurl=1&type=.jpg" alt="Project 3" className="rounded-lg mb-4" />
            <h3 className="text-xl text-yellow-600 font-semibold mb-2">Project 3</h3>
            <p className="text-gray-500 mb-2">Resume Builder Created with Next js</p>
            
          </div>
        </div>
        </section>

        

        

</div>
    
  );
};

export default Hero;