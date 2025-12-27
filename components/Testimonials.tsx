
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marrom mb-6">O que nossas <span className="text-rosé">clientes</span> dizem</h2>
          <p className="text-lg text-marrom/70">A satisfação de quem confiou na MLee Digital para elevar sua marca de beleza.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-nude/20 p-8 rounded-[40px] border border-bege/30 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <Quote className="absolute top-8 right-8 text-bege opacity-40" size={40} />
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-rosé text-rosé" />
                  ))}
                </div>
                <p className="text-marrom/80 leading-relaxed mb-8 italic">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={t.imageUrl} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-rosé"
                />
                <div>
                  <h4 className="font-bold text-marrom">{t.name}</h4>
                  <p className="text-xs text-marrom/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block bg-bege/30 px-8 py-4 rounded-full border border-bege/50">
                <p className="text-marrom font-medium">98% de aprovação e recomendação das nossas clientes</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
