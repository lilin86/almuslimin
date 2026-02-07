
import React from 'react';
import { MessageCircle, Quote, Library, ScrollText, CheckCircle, Info } from 'lucide-react';

const HadithPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <MessageCircle className="w-10 h-10 mr-4 text-teal-600" />
          Hadis & Sunnah <span className="text-xl font-normal opacity-50 ml-4 italic">(Prophetic Traditions)</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Kata-kata, tindakan, dan perakuan Nabi Muhammad SAW. Hadis menjelaskan Al-Quran dan menjadi teladan hidup.
          <span className="block text-sm opacity-60 mt-1 italic">The sayings, actions, and approvals of Prophet Muhammad (PBUH). Hadith clarify the Quran and serve as a living example.</span>
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BookMini name="Sahih Bukhari" count="7,275 Hadis" color="border-teal-500" highlight />
        <BookMini name="Sahih Muslim" count="7,500 Hadis" color="border-teal-500" highlight />
        <BookMini name="Sunan an-Nasa'i" count="5,700 Hadis" color="border-slate-300" />
        <BookMini name="Sunan Abi Dawud" count="5,200 Hadis" color="border-slate-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-10 rounded-3xl border border-slate-200 relative overflow-hidden group">
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-teal-50 opacity-20" />
            <div className="max-w-3xl mx-auto space-y-6 text-center relative z-10">
              <div className="arabic text-3xl text-teal-900">إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ</div>
              <h2 className="text-2xl font-bold text-slate-800">"Setiap amal bergantung kepada niat."</h2>
              <p className="text-slate-500 italic text-sm">"Actions are but by intentions." (Sahih Bukhari)</p>
            </div>
          </section>

          <section className="bg-teal-900 p-8 rounded-3xl text-white shadow-xl">
             <h3 className="text-xl font-bold mb-4 flex items-center">
               <CheckCircle className="w-5 h-5 mr-2 text-teal-400" /> Hadis 40 Imam Nawawi
             </h3>
             <p className="text-teal-100 text-xs leading-relaxed mb-6">
               Himpunan hadis paling asas yang merangkumi seluruh teras agama Islam. Sangat sesuai untuk mula belajar.
               <span className="block opacity-60 mt-1 italic">Imam Nawawi's 40 Hadith - Essential foundations of the Islamic faith.</span>
             </p>
             <button className="bg-white text-teal-900 px-6 py-2 rounded-xl font-bold text-xs hover:bg-teal-50">
               Mula Belajar / Start Learning
             </button>
          </section>
        </div>

        <aside className="bg-teal-50 p-6 rounded-3xl border border-teal-100">
          <h3 className="font-bold text-teal-900 mb-4 flex items-center">
            <Library className="w-5 h-5 mr-2" /> Terminologi Hadis <span className="text-[10px] font-normal opacity-60 ml-2">(Terminology)</span>
          </h3>
          <div className="space-y-4">
            <TermItem title="Sanad" desc="Rangkaian perawi (Chain of narrators)." />
            <TermItem title="Matan" desc="Teks atau isi hadis (The text content)." />
            <TermItem title="Sahih" desc="Hadis yang paling sahih/benar (Authentic)." />
            <TermItem title="Dhaif" desc="Hadis yang lemah (Weak)." />
          </div>
        </aside>
      </div>
    </div>
  );
};

const TermItem: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div>
    <div className="text-xs font-bold text-teal-900">{title}</div>
    <div className="text-[10px] text-teal-700">{desc}</div>
  </div>
);

const BookMini: React.FC<{ name: string, count: string, color: string, highlight?: boolean }> = ({ name, count, color, highlight }) => (
  <div className={`p-6 bg-white rounded-2xl border-b-4 ${color} shadow-sm hover:shadow-md transition-all cursor-pointer`}>
    <h4 className="font-bold text-slate-800 text-sm">{name}</h4>
    <p className="text-xs text-slate-400 mt-1">{count}</p>
  </div>
);

export default HadithPage;
