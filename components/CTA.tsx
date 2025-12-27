
import React from 'react';
import { Smartphone } from 'lucide-react';
import { WHATSAPP_LINK, BRAND_NAME } from '../constants';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-marrom">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rosé/5 skew-x-12 transform translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-bege/5 -skew-x-12 transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight serif">
            Pronta para dar um <span className="text-rosé italic">glow up</span> no seu negócio?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            A {BRAND_NAME} está pronta para transformar sua comunicação digital. Escolha o profissionalismo e veja os resultados no seu faturamento.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-rosé text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-marrom transition-all shadow-2xl shadow-rosé/20 active:scale-95 group"
            >
              <Smartphone className="group-hover:rotate-12 transition-transform" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
          
          <p className="mt-8 text-white/40 font-medium tracking-wide text-sm uppercase">Atendimento humanizado e focado no seu resultado</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
