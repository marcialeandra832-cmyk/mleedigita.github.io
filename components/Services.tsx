
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marrom mb-6">Soluções Digitais <span className="text-rosé">Premium</span></h2>
          <p className="text-lg text-marrom/70">Transformamos a percepção do seu negócio com design focado em converter visitantes em clientes fiéis.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className={`group p-8 rounded-[40px] transition-all duration-300 border-2 ${service.isMain ? 'bg-marrom border-marrom text-white shadow-2xl' : 'bg-nude/30 border-bege/50 hover:border-rosé hover:bg-white'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.isMain ? 'bg-rosé text-white' : 'bg-rosé/10 text-rosé'}`}>
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 serif">{service.title}</h3>
                <p className={`mb-6 leading-relaxed ${service.isMain ? 'text-white/70' : 'text-marrom/60'}`}>
                  {service.description}
                </p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-bold transition-colors ${service.isMain ? 'text-rosé hover:text-rosé/80' : 'text-marrom hover:text-rosé'}`}
                >
                  Consultar Valor <Icons.ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-bege/20 rounded-[50px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-bege/30 max-w-5xl mx-auto">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-marrom mb-4 serif">Procura um Site Exclusivo?</h3>
            <p className="text-marrom/70 italic leading-relaxed">Desenvolvemos Landing Pages personalizadas que funcionam como sua funcionária 24h, agendando serviços enquanto você cuida das suas clientes.</p>
          </div>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-marrom text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-rosé transition-all shadow-xl active:scale-95"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
