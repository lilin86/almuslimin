import React, { useState } from 'react';
import { Book, Lightbulb, Search, BookOpen, Star, Shield, Compass, ChevronRight, Info, Play, Headphones } from 'lucide-react';

const QuranPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const surahs = [
    { no: 1, name: 'Al-Fatihah', title: 'Pembukaan', verses: 7, type: 'Makkah', meaning: 'The Opening' },
    { no: 2, name: 'Al-Baqarah', title: 'Sapi Betina', verses: 286, type: 'Madinah', meaning: 'The Cow' },
    { no: 3, name: 'Ali-Imran', title: 'Keluarga Imran', verses: 200, type: 'Madinah', meaning: 'The Family of Imran' },
    { no: 36, name: 'Yasin', title: 'Yasin', verses: 83, type: 'Makkah', meaning: 'Yasin' },
    { no: 67, name: 'Al-Mulk', title: 'Kerajaan', verses: 30, type: 'Makkah', meaning: 'The Sovereignty' },
    { no: 114, name: 'An-Nas', title: 'Manusia', verses: 6, type: 'Makkah', meaning: 'Mankind' },
  ];

  const filteredSurahs = surahs.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <Book className="w-10 h-10 mr-4 text-blue-600" />
          Al-Quran Al-Karim <span className="text-xl font-normal opacity-50 ml-4 italic">(The Noble Quran)</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Wahyu terakhir yang diturunkan kepada Nabi Muhammad SAW, sebagai petunjuk bagi manusia dan penawar bagi jiwa.
          <span className="block text-sm opacity-60 mt-1 italic">The final revelation sent to Prophet Muhammad (PBUH), serving as a manual for mankind and healing for the soul.</span>
        </p>
      </header>

      {/* Featured Section */}
      <section className="bg-emerald-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BookOpen className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-700 text-emerald-200 text-[10px] font-bold uppercase rounded-full tracking-wider">
              Adab Mendampingi Al-Quran
            </div>
            <h2 className="text-3xl font-bold">Terokai Kebenaran <span className="text-emerald-400">Wahyu Ilahi</span></h2>
            <div className="grid grid-cols-2 gap-4">
              <ApproachStepLight icon={<Shield size={14} />} title="Bersuci" sub="Wuduk" />
              <ApproachStepLight icon={<Compass size={14} />} title="Tadabbur" sub="Fahami" />
              <ApproachStepLight icon={<Star size={14} />} title="Istiqamah" sub="Konsisten" />
              <ApproachStepLight icon={<Headphones size={14} />} title="Inshat" sub="Dengar" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
             <div className="flex items-center space-x-3 mb-4">
               <div className="p-2 bg-emerald-500 rounded-lg"><Play size={16} fill="white" /></div>
               <div>
                 <div className="text-xs font-bold opacity-60 uppercase">Surah Pilihan</div>
                 <div className="font-bold">Al-Kahfi (The Cave)</div>
               </div>
             </div>
             <p className="text-xs text-emerald-100 leading-relaxed mb-4 italic">
               "Barangsiapa membaca Surah Al-Kahfi pada hari Jumaat, terpancarlah cahaya baginya antara dua Jumaat."
             </p>
             <button className="w-full py-2 bg-white text-emerald-900 rounded-xl font-bold text-[10px] uppercase hover:bg-emerald-50 transition-colors">
               Baca & Tadabbur
             </button>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Penjelajah Surah</h2>
            <p className="text-sm text-slate-500">Pilih surah untuk mula belajar (Surah Explorer)</p>
          </div>
          <div className="flex bg-white rounded-full px-4 py-2 border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all w-full md:w-auto">
            <Search className="w-4 h-4 text-slate-400 mr-2 mt-1" />
            <input 
              type="text" 
              placeholder="Cari Surah..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm focus:outline-none w-full md:w-64" 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurahs.map((surah) => (
            <div key={surah.no} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  {surah.no}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600">{surah.name}</h3>
                  <div className="text-[10px] text-slate-400 font-medium uppercase">{surah.title} • {surah.verses} Ayat</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-bold text-slate-300 group-hover:text-blue-400 uppercase tracking-tighter mb-1">{surah.meaning}</div>
                <div className="text-[10px] font-bold bg-slate-50 px-2 py-0.5 rounded text-slate-500 uppercase">{surah.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-amber-500" />
              Ulum al-Quran <span className="text-sm font-normal opacity-60 ml-2">(Quranic Sciences)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConceptItem 
                title="Wahyu (Revelation)" 
                desc="Diturunkan secara berperingkat selama 23 tahun." 
                descEn="Revealed in stages over 23 years."
              />
              <ConceptItem 
                title="Asbab al-Nuzul" 
                desc="Sebab-sebab penurunan ayat untuk konteks sejarah." 
                descEn="Reasons for revelation for historical context."
              />
              <ConceptItem 
                title="Nasikh & Mansukh" 
                desc="Proses penggantian hukum dalam Al-Quran." 
                descEn="Abrogation process in the Quranic laws."
              />
              <ConceptItem 
                title="Tajwid" 
                desc="Seni bacaan dengan makhraj dan hukum yang betul." 
                descEn="Art of recitation with correct pronunciation."
              />
            </div>
          </section>

          <section className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Compass className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Star className="w-6 h-6 mr-3 text-blue-300" />
                Mukjizat Saintifik <span className="text-sm font-normal opacity-70 ml-2">(Scientific Miracles)</span>
              </h2>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Al-Quran mengandungi fakta alam yang hanya ditemui sains moden beribu tahun kemudian.
                <span className="block opacity-70 italic text-xs mt-1">The Quran contains signs pointing to natural facts discovered centuries later by modern science.</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MiracleDetail 
                  title="Asal Alam Semesta" 
                  desc="Langit dan bumi itu dahulu adalah suatu yang padu... (21:30)" 
                  descEn="The heavens and the earth were a joined entity... (21:30)"
                />
                <MiracleDetail 
                  title="Siklus Air (Water Cycle)" 
                  desc="Allah mengirimkan angin, lalu angin itu menggerakkan awan... (30:48)" 
                  descEn="It is Allah who sends the winds, and they stir the clouds... (30:48)"
                />
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-3xl text-white border border-slate-800 shadow-xl">
            <h3 className="font-bold text-sm mb-4 flex items-center text-blue-400">
              <Info className="w-4 h-4 mr-2" /> Menemui Cahaya <span className="text-[10px] font-normal opacity-40 ml-2">(Discovery)</span>
            </h3>
            <div className="space-y-4">
              <DiscoveryPoint 
                title="Keadilan" 
                desc="Al-Quran menekankan keadilan tanpa mengira warna kulit." 
              />
              <DiscoveryPoint 
                title="Ketenangan" 
                desc="Mendengar bacaan Al-Quran dapat meredakan tekanan mental." 
              />
              <DiscoveryPoint 
                title="Sifat Ilmiah" 
                desc="Agama yang sentiasa menggalakkan kajian sains." 
              />
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
             <h4 className="font-bold text-blue-900 text-xs mb-2 uppercase">Ayat Motivasi</h4>
             <div className="arabic text-xl text-blue-800 mb-2">إِنَّ مَعَ الْعُسْرِ يُسْرًا</div>
             <p className="text-[11px] font-bold text-blue-700">"Sesungguhnya bersama kesulitan ada kemudahan."</p>
             <p className="text-[10px] text-blue-400 italic mt-1">(Ash-Sharh: 6)</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

const DiscoveryPoint: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="border-l border-slate-700 pl-4 py-1">
    <div className="text-xs font-bold text-slate-100">{title}</div>
    <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{desc}</div>
  </div>
);

const MiracleDetail: React.FC<{ title: string, desc: string, descEn: string }> = ({ title, desc, descEn }) => (
  <div className="bg-blue-700/50 p-4 rounded-xl border border-blue-500/30">
    <div className="font-bold text-sm mb-1">{title}</div>
    <p className="text-[11px] text-blue-200 leading-relaxed italic mb-1">"{desc}"</p>
    <p className="text-[10px] text-blue-300 opacity-60">"{descEn}"</p>
  </div>
);

const ApproachStepLight: React.FC<{ icon: React.ReactNode, title: string, sub: string }> = ({ icon, title, sub }) => (
  <div className="flex items-center space-x-3 bg-white/10 p-2 rounded-xl border border-white/10">
    <div className="text-emerald-400">{icon}</div>
    <div>
      <div className="text-[10px] font-bold">{title}</div>
      <div className="text-[8px] opacity-60 uppercase tracking-tighter">{sub}</div>
    </div>
  </div>
);

const ConceptItem: React.FC<{ title: string, desc: string, descEn: string }> = ({ title, desc, descEn }) => (
  <div className="p-4 bg-slate-50/50 hover:bg-white rounded-2xl transition-all border border-slate-100 hover:shadow-md">
    <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
    <p className="text-[10px] text-slate-400 italic">{descEn}</p>
  </div>
);

export default QuranPage;