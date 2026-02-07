
import React, { useState } from 'react';
import { RotateCcw, Volume2, VolumeX, Smartphone } from 'lucide-react';

const TasbihPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrateEnabled, setVibrateEnabled] = useState(true);

  const increment = () => {
    setCount(prev => prev + 1);
    if (vibrateEnabled && navigator.vibrate) {
      navigator.vibrate(50);
    }
    if (soundEnabled) {
      const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }
  };

  const reset = () => {
    if (window.confirm("Tetapkan semula pembilang? (Reset counter?)")) {
      setCount(0);
    }
  };

  const cycleTarget = () => {
    const targets = [33, 99, 100, 1000];
    const nextIndex = (targets.indexOf(target) + 1) % targets.length;
    setTarget(targets[nextIndex]);
    setCount(0);
  };

  return (
    <div className="max-w-md mx-auto h-[70vh] flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Tasbih Digital</h1>
        <p className="text-slate-500 font-medium">Zikrullah (Remembrance of Allah)</p>
      </div>

      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-3 rounded-full border ${soundEnabled ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
        <button 
          onClick={() => setVibrateEnabled(!vibrateEnabled)}
          className={`p-3 rounded-full border ${vibrateEnabled ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}
        >
          <Smartphone size={20} />
        </button>
      </div>

      <div className="relative group cursor-pointer" onClick={increment}>
        <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-10 group-active:opacity-30 transition-opacity"></div>
        <div className="w-64 h-64 rounded-full bg-white border-8 border-slate-100 shadow-2xl flex flex-col items-center justify-center relative z-10 hover:border-emerald-100 transition-all active:scale-95">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Bilangan (Count)</span>
          <span className="text-7xl font-bold text-emerald-600 font-mono tracking-tighter">{count}</span>
          <span className="text-sm text-slate-400 mt-2 font-medium">Sasaran (Target): {target}</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={reset}
          className="flex items-center space-x-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 transition-colors shadow-sm text-xs"
        >
          <RotateCcw size={16} />
          <span>Reset</span>
        </button>
        <button 
          onClick={cycleTarget}
          className="flex flex-col items-center px-6 py-2 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors shadow-lg"
        >
          <span className="text-xs">Ubah Sasaran</span>
          <span className="text-[10px] opacity-70 uppercase tracking-tighter">Change Target</span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 w-full">
        <DhikrSuggestion text="SubhanAllah" mean="Maha Suci Allah" meanEn="Glory be to Allah" />
        <DhikrSuggestion text="Alhamdulillah" mean="Segala Puji bagi Allah" meanEn="Praise be to Allah" />
        <DhikrSuggestion text="Allahu Akbar" mean="Allah Maha Besar" meanEn="Allah is Greatest" />
        <DhikrSuggestion text="Astaghfirullah" mean="Aku memohon ampun" meanEn="I seek forgiveness" />
      </div>
    </div>
  );
};

const DhikrSuggestion: React.FC<{ text: string, mean: string, meanEn: string }> = ({ text, mean, meanEn }) => (
  <div className="p-4 bg-white border border-slate-100 rounded-2xl text-center">
    <div className="text-emerald-700 font-bold text-sm mb-1">{text}</div>
    <div className="text-[10px] text-slate-500 font-semibold">{mean}</div>
    <div className="text-[9px] text-slate-400 italic">{meanEn}</div>
  </div>
);

export default TasbihPage;
