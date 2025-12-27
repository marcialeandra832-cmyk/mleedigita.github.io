
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 bg-nude">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-marrom mb-6 leading-tight serif">
          Deixe o seu negócio de beleza mais <span className="text-rosé italic">bonito</span> e organizado.
        </h1>
        <p className="text-lg text-marrom/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          Crio artes simples e acessíveis para o seu WhatsApp e Instagram. Ideal para quem está começando e quer passar mais confiança para as clientes.
        </p>
        
        <div className="flex justify-center mb-12">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosé text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-marrom transition-all shadow-lg active:scale-95"
          >
            Quero melhorar minhas artes
          </a>
        </div>

        <div className="relative inline-block">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop" 
            alt="Celular com design simples" 
            className="rounded-3xl shadow-xl border-4 border-white w-full max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
