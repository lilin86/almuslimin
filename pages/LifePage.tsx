
import React from 'react';
import { 
  Heart, 
  Home, 
  DollarSign, 
  Brain, 
  Smile, 
  Briefcase, 
  Users, 
  Handshake, 
  Leaf, 
  Scale, 
  ShieldAlert,
  Moon
} from 'lucide-react';

// Moved helper components to the top of the file to ensure they are defined 
// before being referenced in the main LifePage component.
const SpiritualCard: React.FC<{ title: string, desc: string, descEn: string, icon: React.ReactNode }> = ({ title, desc, descEn, icon }) => (
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
    <div className="flex items-center space-x-2 mb-2">
      <div className="p-1.5 bg-white rounded-lg text-indigo-500 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
    </div>
    <p className="text-slate-600 text-[11px] leading-tight mb-1">{desc}</p>
    <p className="text-slate-400 text-[10px] italic">{descEn}</p>
  </div>
);

const EthicItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-3 bg-white/40 p-4 rounded-xl border border-rose-200/50 hover:bg-white transition-colors">
    <div className="text-rose-600 mt-0.5">{icon}</div>
    <div>
      <div className="text-xs font-bold text-rose-900">{title}</div>
      <div className="text-[10px] text-rose-700">{desc}</div>
    </div>
  </div>
);

const LifeTopic: React.FC<{ title: string, desc: string, descEn: string }> = ({ title, desc, descEn }) => (
  <div className="p-4 hover:bg-white rounded-2xl transition-all border-l-4 border-transparent hover:border-rose-500">
    <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
    <p className="text-slate-500 text-xs mt-1">{desc}</p>
    <p className="text-[10px] text-slate-400 italic">{descEn}</p>
  </div>
);

const LifePage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <Heart className="w-10 h-10 mr-4 text-rose-600" />
          Cara Hidup Islam <span className="text-xl font-normal opacity-50 ml-4 italic">(Islamic Way of Life)</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Islam bukan sekadar agama, ia adalah 'Deen'—sistem kehidupan yang syumul merangkumi peribadi, keluarga, dan masyarakat.
          <span className="block text-sm opacity-60 mt-1 italic">Islam is a holistic system of life covering personal, family, and societal dimensions.</span>
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Mental Health & Tazkiyah */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-indigo-500" />
              Kesihatan Mental & Jiwa <span className="text-sm font-normal opacity-50 ml-2">(Mental Well-being)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpiritualCard 
                title="Sabar (Patience)" 
                desc="Ketenangan dalam menghadapi ujian." 
                descEn="Resilience and calm during trials."
                icon={<Moon className="w-4 h-4" />}
              />
              <SpiritualCard 
                title="Syukur (Gratitude)" 
                desc="Menghargai nikmat sekecil mana pun." 
                descEn="Appreciating every blessing, big or small."
                icon={<Smile className="w-4 h-4" />}
              />
              <SpiritualCard 
                title="Tawakkal (Trust)" 
                desc="Berusaha dan menyerahkan hasil kepada-Nya." 
                descEn="Taking action then trusting God with the outcome."
                icon={<ShieldAlert className="w-4 h-4" />}
              />
              <SpiritualCard 
                title="Muhasabah (Reflection)" 
                desc="Menilai diri untuk menjadi lebih baik." 
                descEn="Self-audit to become a better person."
                icon={<Brain className="w-4 h-4" />}
              />
            </div>
          </section>

          {/* Social Justice */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-blue-600" />
              Keadilan Sosial <span className="text-sm font-normal opacity-50 ml-2">(Social Justice)</span>
            </h2>
            <div className="space-y-4">
              <LifeTopic 
                title="Kesamarataan Manusia" 
                desc="Tiada perbezaan antara bangsa melainkan ketakwaan." 
                descEn="No superiority of one race over another, except in piety."
              />
              <LifeTopic 
                title="Hak Jiran & Masyarakat" 
                desc="Memuliakan jiran adalah tanda kesempurnaan iman." 
                descEn="Honoring neighbors is a sign of complete faith."
              />
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          {/* Family Section */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 flex items-center">
              <Home className="w-5 h-5 mr-3 text-rose-500" />
              Keluarga <span className="text-xs font-normal opacity-50 ml-2">(Family)</span>
            </h2>
            <div className="space-y-4">
              <LifeTopic 
                title="Ibu Bapa" 
                desc="Keredaan Allah pada reda ibu bapa." 
                descEn="God's pleasure lies in parents' pleasure."
              />
              <LifeTopic 
                title="Pasangan" 
                desc="Mawaddah & Rahmah (Kasih Sayang)." 
                descEn="Love and Mercy between spouses."
              />
            </div>
          </section>

          {/* Environment Section */}
          <section className="bg-emerald-900 p-8 rounded-3xl text-white space-y-6 shadow-xl">
            <h2 className="text-xl font-bold flex items-center">
              <Leaf className="w-5 h-5 mr-3 text-emerald-400" />
              Alam Sekitar <span className="text-xs font-normal opacity-50 ml-2">(Environment)</span>
            </h2>
            <p className="text-emerald-100 text-xs leading-relaxed italic">
              "Dunia ini hijau dan cantik, dan Allah melantik kamu sebagai pengurusnya (Khalifah)."
              <span className="block mt-2 opacity-60">"The world is green and beautiful, and Allah has appointed you as its stewards."</span>
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase text-emerald-300">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                <span>Jangan Membazir (Avoid Waste)</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase text-emerald-300">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                <span>Lindungi Haiwan (Animal Rights)</span>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <section className="bg-rose-50 p-8 rounded-3xl border border-rose-100 space-y-4">
        <h2 className="text-2xl font-bold text-rose-900 flex items-center">
          <Briefcase className="w-6 h-6 mr-3 text-rose-600" />
          Etika & Kewangan <span className="text-sm font-normal opacity-60 ml-2">(Ethics & Finance)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          <EthicItem icon={<Handshake />} title="Ketelusan (Transparency)" desc="Jujur dalam urusan perniagaan." />
          <EthicItem icon={<DollarSign />} title="Bebas Riba (Interest-Free)" desc="Sistem adil tanpa penindasan." />
          <EthicItem icon={<Scale />} title="Halal & Toyyib" desc="Mencari rezeki yang baik dan suci." />
        </div>
      </section>
    </div>
  );
};

export default LifePage;
