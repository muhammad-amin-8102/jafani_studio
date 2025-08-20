import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Interior Design', 'Structural'];

  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      image: "/D5_Image 41_20230527_160653.png",
      description: "A contemporary residential complex featuring sustainable design principles and modern amenities."
    },
    {
      id: 2,
      title: "Luxury Villa Interior",
      category: "Interior Design",
      image: "/LS1.png",
      description: "Elegant interior design for a luxury villa combining comfort with sophisticated aesthetics."
    },
    {
      id: 3,
      title: "Commercial Office Space",
      category: "Commercial",
      image: "/D5_Image 27_20230527_151214.png",
      description: "Modern office space design promoting productivity and employee well-being."
    },
    {
      id: 4,
      title: "Structural Engineering Marvel",
      category: "Structural",
      image: "/D5_Image 45_20230527_154941.png",
      description: "Innovative structural design showcasing engineering excellence and architectural beauty."
    },
    {
      id: 5,
      title: "Boutique Hotel Design",
      category: "Commercial",
      image: "/D5_Image 41_20230527_160653.png",
      description: "Unique boutique hotel design creating memorable experiences for guests."
    },
    {
      id: 6,
      title: "Family Home Renovation",
      category: "Residential",
      image: "/LS1.png",
      description: "Complete renovation of a family home with focus on functionality and style."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Our <span className="text-amber-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of architectural and interior design projects 
            that showcase our expertise and creative vision.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-600 mr-6">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="text-white w-8 h-8" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can bring your vision to life with our expertise 
            in architectural and interior design.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-none transition-all duration-300 group"
          >
            Get In Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;