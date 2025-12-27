
import React, { useState, useEffect } from 'react';
import { PORTFOLIO, WHATSAPP_LINK } from '../constants';
import { ExternalLink, Plus, X, Smartphone } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO[0] | null>(null);
  
  // Prevenir scroll quando o modal estiver aberto
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  // Fix: Explicitly type categories as string[] to resolve 'unknown' type errors in the UI mapping
  const categories: string[] = ['Todos', ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];

  const filteredItems = filter === 'Todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-nude">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-marrom mb-6 serif">Nosso <span className="text-rosé">Portfólio</span></h2>
            <p className="text-lg text-marrom/70">Clique nas imagens para ver a qualidade e sofisticação real de nossas entregas.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === cat ? 'bg-marrom text-white shadow-lg' : 'bg-white text-marrom border border-bege/50 hover:bg-rosé/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-[30px] aspect-[3/4] cursor-pointer shadow-lg bg-white border border-bege/30"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-marrom/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white backdrop-blur-[2px]">
                <p className="text-rosé font-bold text-xs uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-xl font-bold mb-4 serif italic">{item.title}</h4>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-rosé transition-colors">
                    <Plus size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-marrom px-10 py-4 rounded-full font-bold border border-bege shadow-md hover:bg-rosé hover:text-white transition-all group"
          >
            Quero um design assim para mim 
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Modal / Lightbox Ajustado */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-cinza-dark/95 backdrop-blur-sm animate-in fade-in duration-300 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Botão de Fechar isolado para evitar sobreposição */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] text-marrom/60 hover:text-rosé transition-colors p-2 bg-nude/80 rounded-full backdrop-blur-md shadow-sm"
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="h-[300px] md:h-auto min-h-[400px]">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-nude relative">
                <span className="text-rosé font-bold text-sm tracking-widest uppercase mb-4">{selectedItem.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-marrom mb-6 serif italic">{selectedItem.title}</h3>
                <p className="text-marrom/70 mb-8 leading-relaxed">
                  Design desenvolvido com foco total no posicionamento estratégico para o mercado de beleza. Utilizamos tipografia premium e uma curadoria visual que transmite profissionalismo e desejo imediato.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-rosé text-white px-8 py-4 rounded-full font-bold hover:bg-marrom transition-all shadow-lg shadow-rosé/20 w-full"
                  >
                    <Smartphone size={20} />
                    Solicitar Orçamento
                  </a>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-full text-marrom/50 font-bold hover:text-marrom transition-colors py-2 text-sm uppercase tracking-widest"
                  >
                    Voltar ao Portfólio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
