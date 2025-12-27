
import React from 'react';
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import { WHATSAPP_LINK, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinza text-white/60 py-16 border-t border-marrom/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-rosé rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">{BRAND_NAME.split(' ')[0]}<span className="text-rosé">{BRAND_NAME.split(' ')[1]}</span></span>
            </a>
            <p className="max-w-xs text-white/50 leading-relaxed mb-8">
              Design estratégico para elevar marcas de beleza ao patamar que elas merecem. Elegância, rapidez e resultados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rosé hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rosé hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@mlee.digital" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rosé hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#servicos" className="hover:text-rosé transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-rosé transition-colors">Portfólio</a></li>
              <li><a href="#depoimentos" className="hover:text-rosé transition-colors">Depoimentos</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-rosé transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Suporte</h4>
            <p className="mb-2">Estamos online para você</p>
            <p className="text-white font-bold mb-6">Segunda a Sexta das 9h às 18h</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosé font-bold hover:underline underline-offset-4"
            >
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 {BRAND_NAME} - Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Design com <Heart size={12} className="text-rosé fill-rosé" /> para mulheres de visão.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
