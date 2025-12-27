
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Image as ImageIcon, Edit3, Loader2, Download, AlertCircle, Maximize, Smartphone } from 'lucide-react';

const AIStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const checkApiKey = async () => {
    if (!(await (window as any).aistudio.hasSelectedApiKey())) {
      await (window as any).aistudio.openSelectKey();
      return false;
    }
    return true;
  };

  const generateImage = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      if (!(await checkApiKey())) return;
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `Crie um flyer profissional de design para WhatsApp para o mercado de beleza. Estilo minimalista, luxuoso, fundo escuro ou clean, tipografia elegante. Tema: ${prompt}. Deve parecer um material pronto para postar.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "9:16",
            imageSize: imageSize
          },
          tools: [{ googleSearch: {} }]
        },
      });

      for (const part of response.candidates![0].content.parts) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error: any) {
      console.error("Erro ao gerar imagem:", error);
      if (error.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio.openSelectKey();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEditImage = async () => {
    if (!generatedImage || !editPrompt) return;
    setIsEditing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = generatedImage.split(',')[1];
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/png' } },
            { text: `Edite esta imagem de design de beleza conforme solicitado: ${editPrompt}. Mantenha a estética luxuosa e o layout profissional.` }
          ],
        },
      });

      for (const part of response.candidates![0].content.parts) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Erro ao editar imagem:", error);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <section id="studio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rosé/10 text-rosé px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            Laboratório MLee Digital
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-marrom mb-6 serif">
            Crie seu Próprio <span className="text-rosé italic">Exemplo</span>
          </h2>
          <p className="text-lg text-marrom/70">
            Use nossa tecnologia de IA para visualizar como seu flyer pode ficar. Gere designs instantâneos e edite conforme sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-nude/20 rounded-[40px] p-8 md:p-12 border border-bege/30 shadow-xl">
          <div className="space-y-8">
            <div>
              <label className="block text-marrom font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                <ImageIcon size={18} className="text-rosé" />
                O que você quer criar?
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Flyer para promoção de Limpeza de Pele com 30% de desconto, estilo elegante e clean..."
                className="w-full bg-white border border-bege rounded-2xl p-4 text-marrom focus:ring-2 focus:ring-rosé outline-none min-h-[120px] transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex bg-white rounded-full p-1 border border-bege shrink-0">
                {(['1K', '2K', '4K'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setImageSize(size)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${imageSize === size ? 'bg-rosé text-white shadow-md' : 'text-marrom/60 hover:text-marrom'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-marrom/40 uppercase tracking-widest font-bold">Qualidade da Imagem</p>
            </div>

            <button
              onClick={generateImage}
              disabled={isGenerating || !prompt}
              className="w-full flex items-center justify-center gap-3 bg-marrom text-white py-4 rounded-full font-bold text-lg hover:bg-rosé transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles className="group-hover:rotate-12 transition-transform" />}
              {isGenerating ? 'Gerando sua obra...' : 'Gerar Flyer Profissional'}
            </button>

            {generatedImage && (
              <div className="pt-8 border-t border-bege animate-in fade-in slide-in-from-bottom-4 duration-500">
                <label className="block text-marrom font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                  <Edit3 size={18} className="text-rosé" />
                  Gostou? Peça um ajuste (Edição via IA)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editPrompt}
                    onChange={(e) => setEditPrompt(e.target.value)}
                    placeholder="Ex: Adicione um filtro retrô ou troque a cor do fundo..."
                    className="flex-1 bg-white border border-bege rounded-full px-6 py-3 text-marrom focus:ring-2 focus:ring-rosé outline-none"
                  />
                  <button
                    onClick={handleEditImage}
                    disabled={isEditing || !editPrompt}
                    className="bg-rosé text-white p-3 rounded-full hover:bg-marrom transition-all disabled:opacity-50"
                  >
                    {isEditing ? <Loader2 className="animate-spin" size={20} /> : <Edit3 size={20} />}
                  </button>
                </div>
              </div>
            )}
            
            <div className="flex items-start gap-3 p-4 bg-white/50 rounded-2xl border border-bege/50">
              <AlertCircle size={18} className="text-rosé shrink-0 mt-0.5" />
              <p className="text-[11px] text-marrom/60">
                Esta é uma ferramenta de prototipagem. Ao contratar a <strong>MLee Digital</strong>, você recebe artes exclusivas com sua logo, seus preços e estratégia de marketing humanizada. 
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline ml-1">Ver docs de faturamento</a>.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[9/16] bg-cinza-dark rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
              {generatedImage ? (
                <img src={generatedImage} alt="Design Gerado" className="w-full h-full object-cover animate-in zoom-in-95 duration-700" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 p-12 text-center">
                  <Smartphone size={80} className="mb-6 opacity-10" />
                  <p className="text-sm font-bold uppercase tracking-widest">Aguardando sua ideia...</p>
                  <p className="text-xs mt-2 opacity-50">Seu flyer aparecerá aqui pronto para o WhatsApp.</p>
                </div>
              )}
              
              {generatedImage && (
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button 
                    className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-rosé hover:text-white transition-all"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = generatedImage;
                        link.download = `mlee-design-preview.png`;
                        link.click();
                    }}
                  >
                    <Download size={20} />
                  </button>
                  <button className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-marrom hover:text-white transition-all">
                    <Maximize size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;
