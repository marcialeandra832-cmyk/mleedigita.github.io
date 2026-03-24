
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-16 bg-nude">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-marrom mb-6 leading-tight serif">
              Deixe seu negócio de beleza mais <span className="text-rosé italic">bonito</span> e organizado.
            </h1>
            <p className="text-lg text-marrom/70 mb-8 leading-relaxed">
              Crio artes simples e acessíveis para o seu WhatsApp e Instagram. Ideal para quem está começando e quer passar mais confiança para as clientes.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rosé text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-marrom transition-all shadow-lg active:scale-95"
            >
              Quero melhorar minhas artes
            </a>
          </div>

          <div className="hidden lg:flex justify-end">
            {/* IMAGEM 1: Mulher elegante em contexto de beleza */}
            <img 
              src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=600&auto=format&fit=crop" 
              alt="Empreendedora da beleza" 
              className="w-full max-w-[400px] h-auto rounded-[30px] shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
