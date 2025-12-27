
import React from 'react';
import { 
  Heart, 
  Smartphone, 
  Palette,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Service, PortfolioItem, Benefit } from './types';

export const BRAND_NAME = "MLee Digital";
export const WHATSAPP_NUMBER = "5549991619623";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20artes%20para%20meu%20negócio.`;

// Fix: Exporting missing SERVICES constant to resolve error in components/Services.tsx
export const SERVICES: Service[] = [
  {
    id: '1',
    title: "Design de Flyers",
    description: "Artes exclusivas para seus serviços e promoções no WhatsApp.",
    icon: "Smartphone",
    isMain: false
  },
  {
    id: '2',
    title: "Identidade Visual",
    description: "Criação de logotipo e paleta de cores para sua marca brilhar.",
    icon: "Palette",
    isMain: true
  }
];

// Fix: Exporting missing BENEFITS constant to resolve error in components/Benefits.tsx
export const BENEFITS: Benefit[] = [
  {
    title: "Profissionalismo",
    description: "Passe mais confiança para suas clientes com artes bem feitas.",
    icon: <ShieldCheck className="w-6 h-6 text-rosé" />
  },
  {
    title: "Praticidade",
    description: "Receba tudo pronto para postar, sem perder tempo tentando criar.",
    icon: <Zap className="w-6 h-6 text-rosé" />
  },
  {
    title: "Atração",
    description: "Designs pensados para chamar a atenção e converter em agendamentos.",
    icon: <TrendingUp className="w-6 h-6 text-rosé" />
  }
];

// Fix: Exporting missing PORTFOLIO constant to resolve error in components/Portfolio.tsx
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    category: "Instagram",
    title: "Feed Harmônico Nail Designer",
    imageUrl: "https://images.unsplash.com/photo-1632345033839-2161a06262d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "WhatsApp",
    title: "Flyer Promoção Estética",
    imageUrl: "https://images.unsplash.com/photo-1570172619380-4126747a9907?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Logotipo",
    title: "Identidade Visual Lash Care",
    imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Instagram",
    title: "Posts Educativos Cabeleireira",
    imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
  }
];

// Fix: Exporting missing TESTIMONIALS constant to resolve error in components/Testimonials.tsx
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Nail Designer",
    text: "As artes da MLee mudaram meu perfil. Minhas clientes agora comentam como tudo parece mais profissional.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carla Souza",
    role: "Esteticista",
    text: "Adorei a facilidade de receber os flyers prontos. Economizo muito tempo e o resultado é incrível.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Juliana Lima",
    role: "Maquiadora",
    text: "Minha marca agora tem uma cara própria. O logotipo ficou exatamente como eu queria, delicado e forte.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

export const WHAT_I_DO = [
  {
    title: "Artes para WhatsApp",
    description: "Flyers simples para você postar no Status avisando sobre promoções ou novos horários.",
    icon: <Smartphone className="w-6 h-6 text-rosé" />
  },
  {
    title: "Posts para Instagram",
    description: "Imagens para o seu feed ficar mais organizado e com uma aparência mais profissional.",
    icon: <Heart className="w-6 h-6 text-rosé" />
  },
  {
    title: "Logotipos Simples",
    description: "Criação de uma marca básica para você usar nas suas fotos e cartões de visita.",
    icon: <Palette className="w-6 h-6 text-rosé" />
  }
];

export const FOR_WHOM = [
  "Manicures e Nail Designers",
  "Cabeleireiras",
  "Lash Designers",
  "Esteticistas Iniciantes",
  "Maquiadoras"
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Conversa no WhatsApp",
    description: "Você me conta o que precisa e qual o seu estilo preferido."
  },
  {
    step: "2",
    title: "Criação da Arte",
    description: "Eu preparo a imagem com carinho seguindo o que combinamos."
  },
  {
    step: "3",
    title: "Entrega e Uso",
    description: "Envio a arte prontinha para você postar e atrair suas clientes."
  }
];
