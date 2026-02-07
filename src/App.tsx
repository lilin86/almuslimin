import React, { useState, createContext, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  MessageCircle, 
  Heart, 
  Home, 
  Compass,
  Menu,
  X,
  Sparkles,
  Tally5,
  GraduationCap,
  Languages,
  Loader2
} from 'lucide-react';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const QuranPage = lazy(() => import('./pages/QuranPage'));
const TauhidPage = lazy(() => import('./pages/TauhidPage'));
const FiqhPage = lazy(() => import('./pages/FiqhPage'));
const HadithPage = lazy(() => import('./pages/HadithPage'));
const LifePage = lazy(() => import('./pages/LifePage'));
const AIChatPage = lazy(() => import('./pages/AIChatPage'));
const TasbihPage = lazy(() => import('./pages/TasbihPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));

export const LanguageContext = createContext<{
  lang: 'bm' | 'en';
  setLang: (l: 'bm' | 'en') => void;
}>({ lang: 'bm', setLang: () => {} });

const PageLoader = () => (
  <div className="h-[60vh] flex flex-col items-center justify-center space-y-4 text-emerald-600">
    <Loader2 className="w-10 h-10 animate-spin" />
    <p className="text-sm font-medium animate-pulse">Menyiapkan ilmu... (Preparing knowledge...)</p>
  </div>
);

const NavItem: React.FC<{ to: string, icon: React.ReactNode, label: string, subLabel: string, onClick: () => void, highlight?: boolean }> = ({ to, icon, label, subLabel, onClick, highlight }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${isActive 
          ? 'bg-emerald-800 text-white shadow-lg' 
          : highlight 
            ? 'hover:bg-emerald-900 text-emerald-300 border border-emerald-800/50' 
            : 'hover:bg-emerald-900/50 text-emerald-400/80 hover:text-emerald-50'
        }
      `}
    >
      <div className={`${isActive ? 'text-emerald-300' : 'text-emerald-600 group-hover:text-emerald-400'}`}>
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">{label}</span>
        <span className="text-[10px] font-medium uppercase tracking-tighter opacity-60">{subLabel}</span>
      </div>
    </Link>
  );
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState<'bm' | 'en'>('bm');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
          {/* Mobile Navbar */}
          <div className="md:hidden bg-emerald-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <div className="flex items-center space-x-2">
              <Compass className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold tracking-tight">AlMuslimin</span>
            </div>
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Sidebar */}
          <nav className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 fixed md:sticky top-0 h-screen w-72 bg-emerald-950 text-emerald-50 
            transition-transform duration-300 ease-in-out z-40 shadow-xl flex flex-col
          `}>
            <div className="p-8 hidden md:flex items-center space-x-3">
              <div className="p-2 bg-emerald-800 rounded-lg">
                <Compass className="w-8 h-8 text-emerald-300" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">AlMuslimin</h1>
            </div>

            <div className="px-6 mb-4">
              <button 
                onClick={() => setLang(lang === 'bm' ? 'en' : 'bm')}
                className="w-full flex items-center justify-between bg-emerald-900/50 hover:bg-emerald-800 p-3 rounded-xl border border-emerald-800/50 transition-all text-xs font-bold"
              >
                <div className="flex items-center space-x-2">
                  <Languages className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'bm' ? 'Bahasa Melayu' : 'English'}</span>
                </div>
                <span className="text-emerald-500 uppercase">Tukar / Switch</span>
              </button>
            </div>

            <div className="flex-1 px-4 space-y-1 py-2 overflow-y-auto">
              <NavItem to="/" icon={<Home className="w-5 h-5" />} label="Laman Utama" subLabel="Home" onClick={() => setSidebarOpen(false)} />
              
              <div className="pt-4 px-4 pb-2">
                <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-widest">Bimbingan / Guidance</span>
              </div>
              <NavItem to="/quran" icon={<BookOpen className="w-5 h-5" />} label="Al-Quran" subLabel="The Quran" onClick={() => setSidebarOpen(false)} />
              <NavItem to="/tauhid" icon={<ShieldCheck className="w-5 h-5" />} label="Tauhid & Akidah" subLabel="Faith & Creed" onClick={() => setSidebarOpen(false)} />
              <NavItem to="/fiqh" icon={<Scale className="w-5 h-5" />} label="Fiqh & Ibadah" subLabel="Laws & Worship" onClick={() => setSidebarOpen(false)} />
              <NavItem to="/hadith" icon={<MessageCircle className="w-5 h-5" />} label="Hadis & Sunnah" subLabel="Hadith Wisdom" onClick={() => setSidebarOpen(false)} />
              <NavItem to="/life" icon={<Heart className="w-5 h-5" />} label="Cara Hidup" subLabel="Way of Life" onClick={() => setSidebarOpen(false)} />
              
              <div className="pt-6 px-4 pb-2">
                <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-widest">Alatan / Tools</span>
              </div>
              <NavItem to="/tasbih" icon={<Tally5 className="w-5 h-5" />} label="Tasbih Digital" subLabel="Digital Counter" onClick={() => setSidebarOpen(false)} />
              <NavItem to="/quiz" icon={<GraduationCap className="w-5 h-5" />} label="Kuiz Ilmu" subLabel="Knowledge Quiz" onClick={() => setSidebarOpen(false)} />
              
              <div className="pt-6 px-4 pb-2">
                <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-widest">AI Alim</span>
              </div>
              <NavItem to="/ask" icon={<Sparkles className="w-5 h-5 text-yellow-400" />} label="Tanya AlMuslimin" subLabel="Ask AI Alim" onClick={() => setSidebarOpen(false)} highlight />
            </div>

            <div className="p-6 border-t border-emerald-900 text-[10px] text-emerald-500/50">
              &copy; 2026 AlMuslimin.<br/>Bimbingan Untuk Seluruh Manusia.
            </div>
          </nav>

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 py-8 md:p-12">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/quran" element={<QuranPage />} />
                  <Route path="/tauhid" element={<TauhidPage />} />
                  <Route path="/fiqh" element={<FiqhPage />} />
                  <Route path="/hadith" element={<HadithPage />} />
                  <Route path="/life" element={<LifePage />} />
                  <Route path="/ask" element={<AIChatPage />} />
                  <Route path="/tasbih" element={<TasbihPage />} />
                  <Route path="/quiz" element={<QuizPage />} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;