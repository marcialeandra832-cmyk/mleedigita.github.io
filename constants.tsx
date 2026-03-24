
import React from 'react';
import { 
  Heart, 
  Smartphone, 
  Palette,
  CheckCircle2,
  Clock,
  Instagram,
  UserCheck
} from 'lucide-react';

export const BRAND_NAME = "MLee Digital";
export const WHATSAPP_NUMBER = "5549999619123";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20os%20preços%20das%20artes.`;

export const WHAT_I_DO = [
  {
    title: "Artes para WhatsApp",
    description: "Imagens para o seu Status avisando sobre vagas, preços ou avisos importantes.",
    icon: <Smartphone className="w-6 h-6 text-rosé" />
  },
  {
    title: "Posts para Instagram",
    description: "Artes para o seu feed ficar mais organizado e com as cores que você gosta.",
    icon: <Heart className="w-6 h-6 text-rosé" />
  },
  {
    title: "Logotipos Simples",
    description: "Criação de uma marca básica para você colocar nas suas fotos e cartões.",
    icon: <Palette className="w-6 h-6 text-rosé" />
  }
];

export const FOR_WHOM = [
  "Manicures",
  "Cabeleireiras",
  "Lash Designers",
  "Maquiadoras",
  "Esteticistas",
  "Iniciantes na Beleza"
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "A gente conversa",
    description: "Você me chama no WhatsApp e me conta o que precisa para o seu negócio.",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    step: "2",
    title: "Eu crio a arte",
    description: "Faço o design com carinho seguindo o seu gosto e as cores da sua marca.",
    icon: <Palette className="w-5 h-5" />
  },
  {
    step: "3",
    title: "Você posta",
    description: "Te mando o arquivo pronto para você postar e atrair suas clientes.",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

// Fix: Added SERVICES to resolve import error in components/Services.tsx
export const SERVICES = [
  {
    id: 'whatsapp',
    title: "Artes para WhatsApp",
    description: "Imagens para o seu Status avisando sobre vagas, preços ou avisos importantes.",
    icon: "Smartphone",
    isMain: false
  },
  {
    id: 'instagram',
    title: "Posts para Instagram",
    description: "Design de feed estratégico focado em autoridade e beleza.",
    icon: "Instagram",
    isMain: true
  },
  {
    id: 'logo',
    title: "Logotipos Simples",
    description: "Criação de marcas básicas e elegantes para iniciantes.",
    icon: "Palette",
    isMain: false
  },
  {
    id: 'consultoria',
    title: "Consultoria Visual",
    description: "Análise de perfil e bio para atrair o público premium.",
    icon: "UserCheck",
    isMain: false
  }
];

// Fix: Added BENEFITS to resolve import error in components/Benefits.tsx
export const BENEFITS = [
  {
    title: "Confiança Instantânea",
    description: "Passe profissionalismo para suas clientes desde o primeiro olhar.",
    icon: <CheckCircle2 className="w-6 h-6 text-rosé" />
  },
  {
    title: "Ganho de Tempo",
    description: "Não perca horas no Canva. Eu faço o trabalho pesado para você.",
    icon: <Clock className="w-6 h-6 text-rosé" />
  },
  {
    title: "Foco no Resultado",
    description: "Artes feitas para vender seus serviços e valorizar seu trabalho.",
    icon: <Heart className="w-6 h-6 text-rosé" />
  }
];

// Fix: Added PORTFOLIO to resolve import error in components/Portfolio.tsx
export const PORTFOLIO = [
  {
    id: 1,
    category: 'WhatsApp',
    title: 'Tabela de Preços Manicure',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Instagram',
    title: 'Feed Lash Designer',
    imageUrl: 'https://images.unsplash.com/photo-1583001838478-224a8eef3775?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Logotipo',
    title: 'Marca Estética Clean',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Instagram',
    title: 'Stories de Promoção',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop'
  }
];

// Fix: Added TESTIMONIALS to resolve import error in components/Testimonials.tsx
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Clara",
    role: "Manicure",
    text: "Minhas artes ficaram perfeitas! Agora minhas clientes valorizam muito mais meu serviço.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Juliana Silva",
    role: "Esteticista",
    text: "Excelente atendimento e bom gosto. Recomendo para todas as amigas da área da beleza.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marta Mendes",
    role: "Lash Designer",
    text: "Consegui mais agendamentos depois que comecei a postar as artes da MLee Digital.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  }
];
