'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const Projects = ({ 
  title = "Project Reference", 
  subtitle = "Portofolio pemasangan konstruksi baja ringan dan atap di berbagai wilayah.",
  items = []
}) => {
  return (
    <section id="proyek" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title} 
          subtitle={subtitle}
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(project => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1">
                  <MapPin size={12} className="text-amber-500" />
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1 mb-2">
                        <Calendar size={12} />
                        {project.completionDate}
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                    </h3>
                </div>
                
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
