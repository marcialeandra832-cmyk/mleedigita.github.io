
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { WHAT_I_DO, FOR_WHOM, HOW_IT_WORKS, WHATSAPP_LINK } from './constants';
import { ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* 1. Título simples e Hero */}
        <Hero />

        {/* 2. O que eu faço (Solução com mockup simples) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-marrom mb-12 text-center serif italic">
              O que eu faço para te ajudar:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {WHAT_I_DO.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-nude/20 border border-bege/20 text-center flex flex-col items-center">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-marrom mb-4 serif">{item.title}</h3>
                  <p className="text-marrom/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Para quem é */}
        <section className="py-20 bg-bege/10">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-marrom mb-10 serif">Esse serviço é para você que é:</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {FOR_WHOM.map((item, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white rounded-full border border-bege/40 text-marrom text-sm font-semibold shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Como funciona */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-marrom mb-12 text-center serif">Como a gente trabalha:</h2>
            <div className="space-y-8">
              {HOW_IT_WORKS.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl border border-nude hover:border-rosé/30 transition-colors">
                  <div className="w-10 h-10 bg-rosé text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-marrom mb-2">{step.title}</h3>
                    <p className="text-marrom/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Botão WhatsApp (CTA Final) */}
        <section className="py-24 bg-marrom text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 serif">
              Vamos deixar sua marca <span className="text-rosé">linda</span>?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Se você quer sair do básico e ter um perfil que suas clientes admirem, me chama no WhatsApp agora.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-rosé text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              Me chama no WhatsApp
              <ChevronRight size={24} />
            </a>
            <p className="mt-8 text-white/40 text-xs tracking-widest font-bold uppercase">Respondo rapidinho!</p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 text-center text-marrom/40 text-xs border-t border-nude">
        <div className="container mx-auto px-6">
          <p>© 2024 MLee Digital. Design acessível para mulheres batalhadoras.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default App;
