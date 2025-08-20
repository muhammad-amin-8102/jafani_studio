import React from 'react';
import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to create unique and innovative design solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Our passion for design drives us to deliver exceptional results in every project."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in all aspects of our work."
    }
  ];

  const team = [
    {
      name: "Architect Jafani",
      role: "Principal Architect & Founder",
      image: "/D5_Image 41_20230527_160653.png",
      description: "With over 15 years of experience in architectural design and project management."
    },
    {
      name: "Design Team Lead",
      role: "Senior Interior Designer",
      image: "/LS1.png",
      description: "Specializes in luxury residential and commercial interior design projects."
    },
    {
      name: "Structural Engineer",
      role: "Lead Structural Engineer",
      image: "/D5_Image 27_20230527_151214.png",
      description: "Expert in innovative structural solutions and sustainable building practices."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                About <span className="text-amber-400">Jafani Design Studio</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded with a vision to transform spaces and create extraordinary experiences, 
                Jafani Design Studio has been at the forefront of architectural and interior 
                design innovation in India.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/D5_Image 45_20230527_154941.png" 
                alt="About Us" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/LS1.png" 
                alt="Our Story" 
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-600 opacity-20" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-600 opacity-30" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Our <span className="text-amber-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2016, Jafani Design Studio began as a small architectural firm 
                with big dreams. Our founder, Architect Jafani, envisioned a studio that would 
                bridge the gap between innovative design and practical implementation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have grown into a comprehensive design studio offering 
                architectural planning, interior design, structural engineering, and complete 
                project implementation services. Our team of skilled professionals brings 
                together diverse expertise to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we are proud to have completed over 50 projects across residential, 
                commercial, and institutional sectors, each reflecting our commitment to 
                excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Our <span className="text-amber-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-amber-100 text-amber-600 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Meet Our <span className="text-amber-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of architects, designers, and engineers work together 
              to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate to create something extraordinary together.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;