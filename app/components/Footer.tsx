import React from 'react';
import Image from 'next/image';


  import { useEffect, useRef, useState } from "react";

  const Footer: React.FC = () => {
    const [inView, setInView] = useState(false);
  
    

    const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });
  
      skillCardsRef.current.forEach((card) => {
        if (card) {
          observer.observe(card);
        }
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
      if (el && !skillCardsRef.current.includes(el)) {
        skillCardsRef.current.push(el);
      }
    };




  return (
      <div> 
   

    <section id="skills" className="py-20 bg-black">
      <div className="text-center mb-12 fade-in">
        <h2 className="text-4xl text-yellow-400 font-semibold">Skills</h2>
        <p className="text-xl text-yellow-500">
          Here are some of the tools and technologies I work with.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {/* Skill 1 */}
        <div
          ref={addToRefs}  // Add element to ref
          className={`bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:rotate-2 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          } transition-all duration-1000`}
        >
          <div className="text-center mb-4">
            <Image
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="HTML"
              className="mx-auto mb-4"
            />
          </div>
          <h3 className="text-xl font-semibold">HTML</h3>
          <p className="text-gray-500">Structure and markup for modern websites.</p>
        </div>

        {/* Skill 2 */}
        <div
          ref={addToRefs}  // Add element to ref
          className={`bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:rotate-2 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          } transition-all duration-1000`}
        >
          <div className="text-center mb-4">
            <Image
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="CSS"
              className="mx-auto mb-4"
            />
          </div>
          <h3 className="text-xl font-semibold">CSS</h3>
          <p className="text-gray-500">Styling websites with modern techniques like Flexbox and Grid.</p>
        </div>

        {/* Skill 3 */}
        <div
          ref={addToRefs}  // Add element to ref
          className={`bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:rotate-2 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          } transition-all duration-1000`}
        >
          <div className="text-center mb-4">
            <Image
              src="https://img.icons8.com/color/48/000000/javascript.png"
              alt="JavaScript"
              className="mx-auto mb-4"
            />
          </div>
          <h3 className="text-xl font-semibold">JavaScript</h3>
          <p className="text-gray-500">Adding interactivity and dynamic functionality to websites.</p>
        </div>

        {/* Skill 4 */}
        <div
         ref={addToRefs}// Add element to ref
          className={`bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:rotate-2 transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
          } transition-all duration-1000`}
        >
          <div className="text-center mb-4">
            <Image
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="React"
              className="mx-auto mb-4"
            />
          </div>
          <h3 className="text-xl font-semibold">React</h3>
          <p className="text-gray-500">Building fast and interactive UIs with React.js.</p>
        </div>
      </div>
    </section>

    


        


<section id="about-contact" className="flex flex-col lg:flex-row py-20 px-6">
  {/* About Us Section (Left Side) */}
  <div className="lg:w-1/2 bg-brown-900 text-black p-8 lg:p-16">
    <h2 className="text-4xl font-semibold mb-8">About Me</h2>
    <Image
      src="https://via.placeholder.com/150" 
      alt="Your Name"
      className="rounded-full mx-auto mb-6 w-40 h-40 border-4 border-yellow-500"
    />
    <p className="text-xl mb-6 max-w-3xl mx-auto">
      I&apos;m a passionate front-end developer with 5+ years of experience building modern, responsive websites and web applications. I specialize in HTML, CSS, JavaScript, and popular libraries like React and Tailwind CSS.
    </p>
    <p className="text-xl max-w-3xl mx-auto">
      I love problem-solving and collaborating with other creatives to build things that delight users.
    </p>
  </div>

  {/* Contact Us Section (Right Side) */}
  <div className="lg:w-1/2 bg-black  p-8 lg:p-16">
    <h2 className="text-4xl text-yellow-400 font-semibold mb-8">Contact Me</h2>
    <p className="text-xl text-yellow-600 mb-6">
      Have any questions or want to work together? Reach out to me, and I&apos;ll get back to you as soon as possible.
    </p>
    <div className="flex justify-center space-x-6 mb-4">
      <a href="mailto:your-email@example.com" className="text-yellow-300 hover:text-white">Email</a>
      <a href="https://www.linkedin.com/in/your-profile" className="text-yellow-300 hover:text-white">LinkedIn</a>
      <a href="https://github.com/your-username" className="text-yellow-300 hover:text-white">GitHub</a>
    </div>

    {/* Contact Form (optional) */}
    <form className="max-w-2xl mx-auto">
      <div className="mb-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="w-full p-4 border border-yellow-500 rounded-md"
        />
      </div>
      <div className="mb-4">
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="w-full p-4 border border-yellow-500 rounded-md"
        />
      </div>
      <div className="mb-4">
        <textarea 
          name="message" 
          placeholder="Your Message" 
          className="w-full p-4 border border-yellow-500rounded-md"
        
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="bg-yellow-700 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>





    <footer  className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-yellow-400 hover:text-blue-300">LinkedIn</a>
          <a href="#" className="text-yellow-400 hover:text-blue-300">GitHub</a>
          <a href="#" className="text-yellow-400 hover:text-blue-300">Twitter</a>
        </div>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>


    </div>
  );
};

export default Footer;