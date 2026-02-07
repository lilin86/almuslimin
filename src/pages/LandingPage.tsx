import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  Clock, 
  MapPin,
  Tally5,
  GraduationCap,
  Compass,
  ArrowRight,
  Info
} from 'lucide-react';
import { getDailyInspiration } from '../services/gemini';
import { LanguageContext } from '../App';

const LandingPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [inspiration, setInspiration] = useState<string>("Memuatkan bimbingan... (Loading guidance...)");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    getDailyInspiration(lang).then(setInspiration);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [lang]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <section className="relative overflow-hidden bg-emerald-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Kearah <span className="text-emerald-400">Hikmah Ilahi</span>
              <span className="block text-xl md:text-2xl font-normal opacity-60 mt-2 italic">Towards Divine Wisdom</span>
            </h2>
            <p className="text-lg text-emerald-100 font-light leading-relaxed">
              Panduan lengkap untuk umat Islam dan pencari kebenaran. Terokai keindahan Al-Quran dan logik syariat.
              <span className="block text-sm opacity-60 mt-1">A complete guide for Muslims and truth seekers. Explore the beauty of Quran and the logic of Sharia.</span>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/ask" className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold flex flex-col items-center hover:bg-emerald-50 transition-all shadow-lg group">
                <div className="flex items-center">
                  <Sparkles className="mr-2 w-5 h-5 text-yellow-500 animate-pulse" />
                  Tanya AlMuslimin AI
                </div>
                <span className="text-[10px] font-medium opacity-50 uppercase">Ask AI Alim</span>
              </Link>
            </div>
          </div>
          
          <div className="bg-emerald-800/50 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/50 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Waktu Tempatan (Local Time)</span>
              <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Dunia (Global)</span>
            </div>
            <div className="text-4xl font-bold font-mono tracking-tighter">
              {formatTime(time)}
            </div>
            <div className="pt-4 border-t border-emerald-700/50">
              <div className="text-[10px] text-emerald-400 uppercase tracking-widest mb-2">Inspirasi / Inspiration</div>
              <p className="text-sm italic font-medium leading-relaxed">"{inspiration}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* New: Seeker's Section for non-Muslims */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 p-10 rounded-3xl border border-indigo-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase rounded-full tracking-wider mb-2">
            Pencari Kebenaran / Truth Seeker
          </div>
          <h2 className="text-3xl font-bold text-indigo-950">Apa itu Islam? <span className="text-indigo-600/70 block text-lg font-normal italic">Understanding the Core Message</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Adakah anda baru mengenali Islam? Islam adalah penyerahan diri secara damai kepada Pencipta Tunggal. Ia adalah agama logik, kasih sayang, dan keadilan.
            <span className="block text-sm mt-2 opacity-70 italic">Are you new to Islam? Islam means peaceful submission to the One Creator. It is a faith of logic, love, and justice.</span>
          </p>
          <div className="flex gap-4 pt-2">
            <Link to="/tauhid" className="flex items-center text-indigo-600 font-bold hover:underline">
              Mula Mengenali Tuhan <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-indigo-50 space-y-4">
          <h4 className="font-bold text-indigo-900 flex items-center">
            <Info size={16} className="mr-2 text-indigo-500" /> Tahukah Anda?
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Nama "Islam" berasal dari akar kata Arab yang bermaksud "Damai" (Salm) dan "Penyerahan" (Taslim).
            <span className="block mt-1 italic font-medium opacity-80">"Islam" comes from the root words meaning Peace and Submission.</span>
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ToolCard to="/tasbih" icon={<Tally5 />} title="Tasbih Digital" sub="Digital Counter" color="emerald" />
        <ToolCard to="/quiz" icon={<GraduationCap />} title="Kuiz Ilmu" sub="Knowledge Quiz" color="blue" />
        <ToolCard to="/quran" icon={<BookOpen />} title="Ayat Harian" sub="Daily Verse" color="amber" />
        <ToolCard to="/ask" icon={<Sparkles />} title="Tanya AI" sub="Ask AI Alim" color="purple" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard 
          to="/quran" 
          title="Al-Quran" 
          sub="The Noble Quran"
          desc="Kalam Allah, panduan jiwa, dan mukjizat sepanjang zaman." 
          descEn="Word of Allah, guidance for the soul, and timeless miracle."
          icon={<BookOpen className="w-8 h-8" />}
          color="bg-blue-50 text-blue-600"
        />
        <CategoryCard 
          to="/tauhid" 
          title="Tauhid & Akidah" 
          sub="Faith & Creed"
          desc="Teras kepercayaan kepada keesaan Allah SWT." 
          descEn="The core belief in the oneness of Allah SWT."
          icon={<ShieldCheck className="w-8 h-8" />}
          color="bg-purple-50 text-purple-600"
        />
        <CategoryCard 
          to="/fiqh" 
          title="Fiqh & Ibadah" 
          sub="Laws & Worship"
          desc="Panduan praktikal ibadah dan rutin harian." 
          descEn="Practical guide for worship and daily routines."
          icon={<Scale className="w-8 h-8" />}
          color="bg-amber-50 text-amber-600"
        />
      </div>
    </div>
  );
};

const ToolCard: React.FC<{ to: string, icon: React.ReactNode, title: string, sub: string, color: string }> = ({ to, icon, title, sub, color }) => (
  <Link to={to} className="flex items-center p-6 bg-white rounded-3xl border border-slate-200 hover:border-emerald-500 transition-all hover:shadow-lg group">
    <div className={`p-3 bg-${color}-50 text-${color}-600 rounded-2xl mr-4 group-hover:bg-${color}-600 group-hover:text-white transition-colors`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
    </div>
    <div className="flex flex-col leading-tight">
      <div className="font-bold text-slate-900 text-sm">{title}</div>
      <div className="text-[10px] text-slate-400 uppercase font-medium">{sub}</div>
    </div>
  </Link>
);

const CategoryCard: React.FC<{ to: string, title: string, sub: string, desc: string, descEn: string, icon: React.ReactNode, color: string }> = ({ to, title, sub, desc, descEn, icon, color }) => (
  <Link to={to} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 transition-all hover:shadow-xl">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2 block">{sub}</span>
    <p className="text-sm text-slate-600 leading-relaxed font-medium mb-1">{desc}</p>
    <p className="text-xs text-slate-400 italic leading-relaxed">{descEn}</p>
  </Link>
);

export default LandingPage;