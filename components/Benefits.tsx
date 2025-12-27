
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-bege rounded-full blur-3xl opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop" 
              alt="Elegância em design" 
              className="rounded-[50px] shadow-2xl relative z-10 border border-bege/30 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-marrom p-8 rounded-3xl shadow-xl z-20 max-w-xs text-white">
              <p className="font-bold text-xl italic mb-1 serif">"Meu faturamento dobrou após o rebranding."</p>
              <p className="text-rosé text-sm">- Cliente Satisfeita</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-marrom mb-8">O poder do <span className="text-rosé italic">posicionamento</span> premium.</h2>
            
            <div className="space-y-8">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 bg-nude rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform border border-bege">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-marrom mb-2 serif">{benefit.title}</h4>
                    <p className="text-marrom/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-1 bg-gradient-to-r from-bege to-rosé rounded-2xl inline-block">
               <div className="bg-white px-6 py-3 rounded-2xl">
                 <p className="text-marrom font-semibold flex items-center gap-2">
                   <span className="text-rosé">✓</span> Atendimento personalizado via WhatsApp
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
