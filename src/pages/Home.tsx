import React, { useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Building, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let running = true;
    const rafId = { id: 0 } as { id: number };

    const onScroll = () => {
      // wake-up for rAF loop; we keep the loop running to continuously update
    };

    const tick = () => {
      if (!running) return;
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const translate = Math.round(rect.top * -0.5);
        heroRef.current.style.willChange = 'transform';
        heroRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
      }

      rafId.id = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafId.id = requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.id);
    };
  }, []);

  const portfolioItems = [
    {
      title: "Modern Residential Complex",
      category: "Residential",
      image: "/D5_Image 41_20230527_160653.png"
    },
    {
      title: "Luxury Villa Interior",
      category: "Interior Design",
      image: "/LS1.png"
    },
    {
      title: "Commercial Office Space",
      category: "Commercial",
      image: "/D5_Image 27_20230527_151214.png"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          ref={heroRef}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900"
        >
          <div className="absolute inset-0 bg-black/40" />
          <img 
            src="/D5_Image 45_20230527_154941.png" 
            alt="Architecture" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Designing
            <span className="block text-amber-400 font-normal">Tomorrow's Spaces</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Where architectural excellence meets innovative design
          </p>
          <Link 
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-none transition-all duration-300 group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <ParallaxSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                {/* Our  */}
                <span className="text-amber-600">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Jafani Design Studio, we believe that exceptional design has the power to 
                transform not just spaces, but lives. Our vision is to create architectural 
                and interior solutions that seamlessly blend functionality with aesthetic beauty.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every project we undertake is a testament to our commitment to innovation, 
                sustainability, and the unique vision of our clients.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/D5_Image 27_20230527_151214.png" 
                alt="Our Vision" 
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-600 opacity-20" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-600 opacity-30" />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Building className="w-12 h-12 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Lightbulb className="w-12 h-12 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Featured <span className="text-amber-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest architectural and interior design projects that showcase 
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="text-sm text-amber-600 font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection 
        className="py-20 bg-gray-900 text-white"
        backgroundImage="/LS1.png"
      >
        <div className="bg-black/60 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's collaborate to bring your architectural and design dreams to life.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Home;