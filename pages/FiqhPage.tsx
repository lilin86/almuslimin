import React, { useState, useEffect } from 'react';
import { Scale, Clock, Heart, Users, DollarSign, Calculator, Droplets, BookOpen, MapPin, Map, Plane } from 'lucide-react';

const FiqhPage: React.FC = () => {
  const [assets, setAssets] = useState({ cash: 0, gold: 0, business: 0 });
  const [zakatTotal, setZakatTotal] = useState<number | null>(null);

  const calculateZakat = (e: React.FormEvent) => {
    e.preventDefault();
    setZakatTotal((assets.cash + assets.gold + assets.business) * 0.025);
  };

  return (
    <div className="space-y-12 animate-fade-in pb-20">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <Scale className="w-10 h-10 mr-4 text-amber-600" />
          Fiqh & Ibadah <span className="text-xl font-normal opacity-50 ml-4 italic">(Islamic Law & Worship)</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Sains praktikal dalam menjalankan syariat Allah dalam kehidupan seharian.
          <span className="block text-sm opacity-60 mt-1 italic">The practical science of applying Allah's laws in daily life.</span>
        </p>
      </header>

      {/* Prayer Times Dashboard */}
      <section className="bg-emerald-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Clock className="w-64 h-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <MapPin size={12} className="mr-1" /> Waktu Solat Tempatan (Local Prayer Times)
            </div>
            <h2 className="text-3xl font-bold">Zuhur <span className="text-emerald-400">1:15 PM</span></h2>
            <p className="text-emerald-100/60 text-xs italic">Seterusnya: Asar pada 4:32 PM (Next: Asr at 4:32 PM)</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 w-full md:w-auto">
            <TimeBox name="Subuh" time="5:48" />
            <TimeBox name="Zuhur" time="1:15" active />
            <TimeBox name="Asar" time="4:32" />
            <TimeBox name="Maghrib" time="7:18" />
            <TimeBox name="Isyak" time="8:29" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <PillarCard icon={<Heart />} name="Syahadah" label="Faith" />
        <PillarCard icon={<Clock />} name="Solat" label="Prayer" active />
        <PillarCard icon={<Users />} name="Zakat" label="Charity" />
        <PillarCard icon={<Heart />} name="Puasa" label="Fasting" />
        <PillarCard icon={<Map />} name="Haji" label="Hajj" />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
               <Clock className="mr-3 text-emerald-600" /> Solat 5 Waktu <span className="text-sm font-normal opacity-50 ml-2">(Daily Prayers)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <PrayerTimeCard name="Subuh (Fajr)" time="Fajar" rakaat="2" />
              <PrayerTimeCard name="Zuhur (Dhuhr)" time="Tengah Hari" rakaat="4" />
              <PrayerTimeCard name="Asar (Asr)" time="Petang" rakaat="4" />
              <PrayerTimeCard name="Maghrib" time="Senja" rakaat="3" />
              <PrayerTimeCard name="Isyak (Isha)" time="Malam" rakaat="4" />
            </div>
          </section>

          {/* New Haji/Umrah Guide */}
          <section className="bg-amber-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Plane className="w-64 h-64" />
            </div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Map className="w-6 h-6 mr-3 text-amber-200" /> Haji & Umrah <span className="text-xs font-normal opacity-60 ml-2">(Pilgrimage)</span>
              </h2>
              <p className="text-amber-50 text-sm leading-relaxed italic">
                Kemuncak pengabdian diri di Tanah Suci Mekah bagi yang mampu.
                <span className="block opacity-70">The ultimate devotion in the Holy Land of Makkah for those who are able.</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <HajjStep title="Ihram" desc="Niat dan memakai pakaian suci." />
                <HajjStep title="Tawaf" desc="Mengelilingi Kaabah 7 kali." />
                <HajjStep title="Sa'i" desc="Berjalan antara Safa dan Marwah." />
                <HajjStep title="Wukuf" desc="Berada di Arafah (Kemuncak Haji)." />
              </div>
            </div>
          </section>

          <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-inner">
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
              <Calculator className="w-5 h-5 mr-2" /> Kalkulator Zakat <span className="text-xs font-normal opacity-60 ml-2">(Zakat Calculator)</span>
            </h3>
            <form onSubmit={calculateZakat} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CalcInput label="Tunai / Simpanan" value={assets.cash} onChange={(v) => setAssets({...assets, cash: v})} />
                <CalcInput label="Emas / Perak" value={assets.gold} onChange={(v) => setAssets({...assets, gold: v})} />
                <CalcInput label="Aset Perniagaan" value={assets.business} onChange={(v) => setAssets({...assets, business: v})} />
              </div>
              <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition-all shadow-lg">
                Kira Zakat (2.5%)
              </button>
            </form>
            {zakatTotal !== null && (
              <div className="mt-6 p-4 bg-white rounded-xl border-2 border-amber-200 text-center animate-fade-in shadow-sm">
                <span className="text-xs text-slate-400 font-bold uppercase">Anggaran Zakat</span>
                <div className="text-3xl font-bold text-amber-600">RM {zakatTotal.toLocaleString()}</div>
              </div>
            )}
          </section>
        </div>

        <section className="bg-emerald-900 p-8 rounded-3xl text-white shadow-xl h-fit">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-emerald-400" /> 4 Mazhab Utama
          </h3>
          <p className="text-emerald-100 text-xs leading-relaxed mb-4 italic">Major Schools of Jurisprudence:</p>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-emerald-800 pb-2"><span>Hanafi</span> <span className="opacity-50 text-[10px]">Asia Tengah / India</span></li>
            <li className="flex justify-between border-b border-emerald-800 pb-2"><span>Maliki</span> <span className="opacity-50 text-[10px]">Afrika Utara</span></li>
            <li className="flex justify-between border-b border-emerald-800 pb-2"><span>Syafi'i</span> <span className="opacity-50 text-[10px]">Asia Tenggara / Malaysia</span></li>
            <li className="flex justify-between border-b border-emerald-800 pb-2"><span>Hanbali</span> <span className="opacity-50 text-[10px]">Arab Saudi</span></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const HajjStep: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="bg-amber-700/40 p-3 rounded-xl border border-amber-500/30">
    <div className="font-bold text-xs">{title}</div>
    <div className="text-[10px] text-amber-100/70">{desc}</div>
  </div>
);

const TimeBox: React.FC<{ name: string, time: string, active?: boolean }> = ({ name, time, active }) => (
  <div className={`p-2 rounded-xl text-center border transition-all ${active ? 'bg-emerald-500 border-emerald-400 scale-105 shadow-lg' : 'bg-emerald-800/30 border-emerald-700/50'}`}>
    <div className="text-[9px] font-bold uppercase opacity-60 mb-0.5">{name}</div>
    <div className="text-xs font-mono font-bold">{time}</div>
  </div>
);

const PrayerTimeCard: React.FC<{ name: string, time: string, rakaat: string }> = ({ name, time, rakaat }) => (
  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all">
    <div>
      <div className="font-bold text-slate-900 text-sm">{name}</div>
      <div className="text-[10px] text-slate-400">{time}</div>
    </div>
    <div className="text-[10px] font-bold bg-white px-3 py-1 rounded-full text-emerald-600 border border-emerald-50">{rakaat} Rakaat</div>
  </div>
);

const CalcInput: React.FC<{ label: string, value: number, onChange: (v: number) => void }> = ({ label, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input 
        type="number" 
        value={value} 
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="w-full pl-9 pr-4 py-2 bg-white border border-amber-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
      />
    </div>
  </div>
);

const PillarCard: React.FC<{ icon: React.ReactNode, name: string, label: string, active?: boolean }> = ({ icon, name, label, active }) => (
  <div className={`p-6 rounded-3xl flex flex-col items-center justify-center space-y-2 transition-all cursor-pointer ${active ? 'bg-amber-600 text-white shadow-xl' : 'bg-white text-slate-400 border border-slate-200 hover:border-amber-300'}`}>
    <div className={`${active ? 'text-amber-200' : 'text-slate-300'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
    </div>
    <div className="font-bold text-sm">{name}</div>
    <div className={`text-[9px] uppercase tracking-widest text-center ${active ? 'text-amber-100' : 'text-slate-400'}`}>{label}</div>
  </div>
);

export default FiqhPage;