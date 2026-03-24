
import React from 'react';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { WHAT_I_DO, FOR_WHOM, HOW_IT_WORKS, WHATSAPP_LINK } from './constants';
import { ChevronRight, Smartphone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-marrom">
      <Header />
      
      <main>
        {/* HERO - TÍTULO E CHAMADA */}
        <section className="pt-20 pb-16 bg-nude">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 serif leading-tight">
              Artes simples e <span className="text-rosé italic">bonitas</span> para o seu negócio de beleza.
            </h1>
            <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
              Eu ajudo empreendedoras que estão começando a ter um visual mais profissional no WhatsApp e Instagram, sem cobrar caro por isso.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rosé text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-marrom transition-all shadow-lg active:scale-95"
            >
              Quero ver os preços
              <ChevronRight size={20} />
            </a>
          </div>
        </section>

        {/* O QUE EU FAÇO */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-16 text-center serif">Como eu te ajudo:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {WHAT_I_DO.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-nude/20 border border-bege/20 text-center">
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 serif">{item.title}</h3>
                  <p className="opacity-70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOCKUP SIMPLES - VISUALIZAÇÃO */}
        <section className="py-20 bg-nude/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white p-4 rounded-[40px] shadow-2xl border-8 border-marrom/5">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=500&auto=format&fit=crop" 
                    alt="Celular mostrando arte simples" 
                    className="rounded-[28px] w-full h-auto"
                  />
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-6 serif italic">Artes feitas para o seu dia a dia.</h2>
                <p className="text-lg opacity-80 mb-8 leading-relaxed">
                  Chega de passar horas no Canva e não gostar do resultado. Eu faço as imagens para você, com as suas informações, prontas para postar.
                </p>
                <div className="space-y-4">
                   {FOR_WHOM.slice(0, 3).map((job, idx) => (
                     <div key={idx} className="flex items-center gap-3 font-semibold text-sm">
                       <div className="w-2 h-2 bg-rosé rounded-full"></div>
                       {job}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-16 text-center serif">Passo a passo:</h2>
            <div className="space-y-8">
              {HOW_IT_WORKS.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl border border-nude hover:border-rosé/30 transition-colors bg-white shadow-sm">
                  <div className="w-10 h-10 bg-rosé text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="opacity-70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É (PILLS) */}
        <section className="py-20 bg-bege/5">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-10 serif">Atendo com carinho:</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {FOR_WHOM.map((item, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white rounded-full border border-bege/30 text-sm font-semibold shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="py-24 bg-marrom text-white text-center">
          <div className="container mx-auto px-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">
              Vamos começar a <span className="text-rosé">melhorar</span> seu visual?
            </h2>
            <p className="opacity-60 mb-10 text-lg">
              Me chama no WhatsApp e vamos conversar sobre o que você precisa. Respondo assim que puder!
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-rosé text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Me chama no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 text-center text-marrom/40 text-xs border-t border-nude">
        <div className="container mx-auto px-6">
          <p>© 2024 MLee Digital. Design honesto para mulheres que trabalham por conta própria.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;
