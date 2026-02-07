
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Send, User, Bot, Loader2, Info, RefreshCw } from 'lucide-react';
import { askAI } from '../services/gemini';
import { ChatMessage } from '../types';
import { LanguageContext } from '../App';

const AIChatPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      content: lang === 'bm' 
        ? "Assalamu alaikum. Saya AlMuslimin Alim, pembantu anda. Bagaimanakah saya boleh membantu anda hari ini?" 
        : "Assalamu alaikum. I am AlMuslimin Alim, your assistant. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      
      const response = await askAI(userMsg, lang, history);
      setMessages(prev => [...prev, { role: 'model', content: response.text }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: lang === 'bm' 
          ? "Maaf, saya mengalami gangguan. Sila cuba lagi sebentar." 
          : "I'm sorry, I encountered an error. Please try again in a moment." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm(lang === 'bm' ? "Padam sejarah perbualan?" : "Clear conversation history?")) {
      setMessages([{ 
        role: 'model', 
        content: lang === 'bm' ? "Perbualan telah dipadam." : "Conversation cleared." 
      }]);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl relative">
      <div className="bg-emerald-900 p-6 flex justify-between items-center text-white">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-emerald-300" />
          <div>
            <h2 className="font-bold text-lg">AlMuslimin Alim AI</h2>
            <p className="text-xs text-emerald-300">
              {lang === 'bm' ? 'Pembantu Maya Bilingual' : 'Bilingual AI Assistant'}
            </p>
          </div>
        </div>
        <button onClick={clearChat} className="p-2 hover:bg-emerald-800 rounded-full transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
              ? 'bg-emerald-600 text-white rounded-tr-none' 
              : 'bg-slate-50 text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              <div className="flex items-center space-x-2 mb-1 opacity-50 font-bold uppercase text-[10px]">
                {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                <span>{msg.role === 'user' ? (lang === 'bm' ? 'Anda' : 'You') : 'AI Alim'}</span>
              </div>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs italic">{lang === 'bm' ? 'Sedang berfikir...' : 'Alim is thinking...'}</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="px-6 py-2 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400">
        <Info className="inline w-3 h-3 mr-1" />
        {lang === 'bm' 
          ? "Sila rujuk ulama bertauliah untuk fatwa rasmi." 
          : "Please consult qualified scholars for official fatwas."}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex items-center space-x-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={lang === 'bm' ? "Tanya apa sahaja..." : "Ask anything..."}
          className="flex-1 bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 rounded-full px-6 py-3 text-sm"
        />
        <button 
          disabled={loading || !input.trim()}
          className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 transition-all"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default AIChatPage;
