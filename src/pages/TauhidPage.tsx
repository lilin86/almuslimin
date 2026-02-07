import React from 'react';
import { ShieldCheck, Cloud, Sun, Eye, Heart, Zap, Globe, Lightbulb, CheckCircle, Info, Star } from 'lucide-react';

const TauhidPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <ShieldCheck className="w-10 h-10 mr-4 text-purple-600" />
          Tauhid & Akidah <span className="text-xl font-normal opacity-50 ml-4 italic">(Faith & Creed)</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Teras agama Islam adalah mengesakan Allah SWT. Tiada Tuhan selain Allah dan tiada sekutu bagi-Nya.
          <span className="block text-sm opacity-60 mt-1 italic">The core of Islam is monotheism. There is no God but Allah, and He has no partners.</span>
        </p>
      </header>

      {/* Hero: Logic and God section */}
      <section className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-5">
          <Zap className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center">
              <Lightbulb className="mr-3 text-yellow-400" /> Mengenali Pencipta <span className="text-sm font-normal opacity-50 ml-2">(Reason & Faith)</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Islam mengajak manusia menggunakan akal untuk mengenali Tuhan melalui ciptaan-Nya. Keteraturan alam semesta adalah bukti adanya Perancang yang Maha Bijaksana.
              <span className="block mt-2 opacity-60 italic">Islam invites humans to use reason to recognize God through His creation.</span>
            </p>
            <div className="grid grid-cols-1 gap-4">
              <LogicPoint 
                title="Hukum Fitrah" 
                desc="Setiap manusia mempunyai keinginan dalaman untuk mengenali Pencipta." 
                descEn="Every human has an innate desire to know the Creator."
              />
              <LogicPoint 
                title="Kesempurnaan Fizik" 
                desc="Ketetapan fizik yang amat tepat untuk hidupan di bumi." 
                descEn="The precise laws of physics that allow life on Earth."
              />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="arabic text-3xl text-purple-300 leading-loose text-center">
              قُلْ هُوَ اللَّهُ أَحَدٌ
            </div>
            <p className="text-sm text-center italic text-slate-300">
              "Katakanlah (Wahai Muhammad): Tuhanku ialah Allah Yang Maha Esa."
              <span className="block mt-1 text-[10px] opacity-60">"Say, He is Allah, [who is] One." (112:1)</span>
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
               <ShieldCheck className="w-6 h-6 mr-3 text-purple-600" />
               Tiga Pembahagian Tauhid <span className="text-sm font-normal opacity-60 ml-2">(The Three Pillars)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PillarBoxSmall 
                title="Rububiyyah" 
                subtitle="Lordship"
                desc="Allah adalah Pencipta tunggal."
              />
              <PillarBoxSmall 
                title="Uluhiyyah" 
                subtitle="Worship"
                desc="Ibadah hanya untuk Allah."
              />
              <PillarBoxSmall 
                title="Asma' wa-Sifat" 
                subtitle="Attributes"
                desc="Nama & Sifat Allah yang Agung."
              />
            </div>
            <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <h4 className="text-sm font-bold text-purple-900 mb-2">Mengapa pembahagian ini penting?</h4>
              <p className="text-xs text-purple-700 leading-relaxed">
                Untuk memastikan kepercayaan kita bersih daripada sebarang bentuk syirik (menyekutukan Allah) dalam apa jua keadaan sekalipun.
              </p>
            </div>
          </section>

          <section className="bg-purple-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Heart className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-purple-400" />
                Asma-ul-Husna (99 Names)
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <NameCard arabic="الرحمن" translit="Ar-Rahman" mean="Maha Pemurah" />
                <NameCard arabic="الرحيم" translit="Ar-Rahim" mean="Maha Penyayang" />
                <NameCard arabic="الملك" translit="Al-Malik" mean="Maha Merajai" />
                <NameCard arabic="القدوس" translit="Al-Quddus" mean="Maha Suci" />
                <NameCard arabic="السلام" translit="As-Salam" mean="Pemberi Sejahtera" />
                <NameCard arabic="المؤمن" translit="Al-Mu'min" mean="Pemberi Keamanan" />
                <NameCard arabic="المهيمن" translit="Al-Muhaymin" mean="Maha Pemelihara" />
                <NameCard arabic="العزيز" translit="Al-Aziz" mean="Maha Perkasa" />
                <NameCard arabic="الجبار" translit="Al-Jabbar" mean="Maha Gagah" />
                <NameCard arabic="المتكبر" translit="Al-Mutakabbir" mean="Maha Megah" />
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-500" /> Rukun Iman <span className="text-[10px] font-normal opacity-50 ml-2">(6 Pillars of Faith)</span>
            </h3>
            <ul className="space-y-2">
              <FaithItem num="1" title="Beriman kepada Allah" sub="Belief in Allah" />
              <FaithItem num="2" title="Malaikat" sub="Belief in Angels" />
              <FaithItem num="3" title="Kitab-Kitab" sub="Belief in Books" />
              <FaithItem num="4" title="Para Rasul" sub="Belief in Prophets" />
              <FaithItem num="5" title="Hari Kiamat" sub="The Day of Judgment" />
              <FaithItem num="6" title="Qada & Qadar" sub="Divine Decree" />
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
            <h4 className="font-bold text-sm text-purple-900 mb-3 flex items-center">
              <Info className="w-4 h-4 mr-2" /> Hikmah Tauhid
            </h4>
            <div className="space-y-3">
              <div className="text-[10px] text-purple-700 flex items-start space-x-2">
                <CheckCircle size={12} className="mt-0.5 shrink-0" />
                <span>Memerdekakan jiwa daripada menyembah sesama manusia.</span>
              </div>
              <div className="text-[10px] text-purple-700 flex items-start space-x-2">
                <CheckCircle size={12} className="mt-0.5 shrink-0" />
                <span>Memberikan ketenangan hati yang hakiki (Inner Peace).</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const FaithItem: React.FC<{ num: string, title: string, sub: string }> = ({ num, title, sub }) => (
  <li className="group flex items-center text-slate-700 bg-slate-50 px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100">
    <span className="text-[10px] w-5 h-5 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3">{num}</span>
    <div>
      <div className="text-xs font-bold leading-tight">{title}</div>
      <div className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">{sub}</div>
    </div>
  </li>
);

const LogicPoint: React.FC<{ title: string, desc: string, descEn: string }> = ({ title, desc, descEn }) => (
  <div className="border-l-2 border-yellow-400/30 pl-4 py-1">
    <div className="text-xs font-bold text-yellow-400">{title}</div>
    <div className="text-[10px] text-slate-400 leading-tight">{desc}</div>
    <div className="text-[9px] text-slate-500 italic opacity-60">{descEn}</div>
  </div>
);

const NameCard: React.FC<{ arabic: string, translit: string, mean: string }> = ({ arabic, translit, mean }) => (
  <div className="bg-purple-800/40 p-3 rounded-xl border border-purple-700/50 text-center hover:bg-purple-800 transition-colors group">
    <div className="arabic text-xl text-white group-hover:scale-110 transition-transform">{arabic}</div>
    <div className="text-[9px] font-bold text-purple-300 uppercase mt-1">{translit}</div>
    <div className="text-[8px] text-purple-100/60 leading-none mt-1 group-hover:text-white">{mean}</div>
  </div>
);

const PillarBoxSmall: React.FC<{ title: string, subtitle: string, desc: string }> = ({ title, subtitle, desc }) => (
  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-300 transition-colors text-center md:text-left">
    <div className="text-[9px] font-bold text-purple-500 uppercase tracking-widest mb-1">{subtitle}</div>
    <h3 className="text-sm font-bold text-slate-800 mb-1">{title}</h3>
    <p className="text-[10px] text-slate-500 leading-tight">{desc}</p>
  </div>
);

export default TauhidPage;