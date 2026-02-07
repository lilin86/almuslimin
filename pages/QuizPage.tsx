
import React, { useState, useContext } from 'react';
import { GraduationCap, Book, ShieldCheck, Scale, MessageCircle, Heart, CheckCircle2, XCircle, ChevronRight, RotateCcw, Loader2, Sparkles } from 'lucide-react';
import { generateQuiz } from '../services/gemini';
import { LanguageContext } from '../App';

interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

const QuizPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<string | null>(null);

  const startQuiz = async (cat: string) => {
    setLoading(true);
    setCategory(cat);
    const qs = await generateQuiz(cat, lang);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setSelectedIdx(null);
    setIsAnswered(false);
    setLoading(false);
  };

  const handleAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    if (idx === questions[currentIdx].correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setIsAnswered(true);
    }
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
        <p className="text-slate-500 animate-pulse">{lang === 'bm' ? 'Menyediakan soalan...' : 'Preparing questions...'}</p>
      </div>
    );
  }

  if (category && questions.length > 0 && currentIdx < questions.length) {
    const q = questions[currentIdx];

    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        <div className="flex justify-between items-center text-xs font-bold uppercase">
          <span className="text-emerald-600">{category} Quiz</span>
          <span className="text-slate-400">{currentIdx + 1} / {questions.length}</span>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-xl font-bold text-slate-900 leading-tight">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let style = "border-slate-100 hover:border-emerald-200 hover:bg-emerald-50";
              if (isAnswered) {
                if (i === q.correctAnswerIndex) style = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold";
                else if (i === selectedIdx) style = "border-red-400 bg-red-50 text-red-700";
                else style = "opacity-50 border-slate-100";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${style}`}
                >
                  <span className="text-sm">{opt}</span>
                  {isAnswered && i === q.correctAnswerIndex && <CheckCircle2 size={18} />}
                  {isAnswered && i === selectedIdx && i !== q.correctAnswerIndex && <XCircle size={18} />}
                </button>
              );
            })}
          </div>
          {isAnswered && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
              <span className="font-bold block mb-1 uppercase text-emerald-600">Penjelasan / Explanation:</span>
              {q.explanation}
            </div>
          )}
          {isAnswered && (
            <button onClick={nextQuestion} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center">
              {currentIdx === questions.length - 1 ? (lang === 'bm' ? "Lihat Keputusan" : "See Results") : (lang === 'bm' ? "Soalan Seterusnya" : "Next Question")}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (category && questions.length > 0 && isAnswered) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 py-12">
        <GraduationCap className="w-16 h-16 text-emerald-600 mx-auto" />
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{lang === 'bm' ? 'Tahniah!' : 'Mubarak!'}</h2>
          <p className="text-slate-500">{lang === 'bm' ? 'Kuiz Selesai' : 'Quiz Completed'}</p>
        </div>
        <div className="text-5xl font-bold text-emerald-600">{score} / {questions.length}</div>
        <button onClick={() => setCategory(null)} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold">
          {lang === 'bm' ? 'Kembali ke Menu' : 'Back to Menu'}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 text-center animate-fade-in">
      <h1 className="text-4xl font-bold">Kuiz Akademi AlMuslimin</h1>
      <p className="text-slate-500 max-w-xl mx-auto italic">(AlMuslimin Academy Quiz)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuizCard title="Al-Quran" onClick={() => startQuiz('Quran')} icon={<Book size={24} />} />
        <QuizCard title="Tauhid" onClick={() => startQuiz('Tauhid')} icon={<ShieldCheck size={24} />} />
        <QuizCard title="Fiqh" onClick={() => startQuiz('Fiqh')} icon={<Scale size={24} />} />
      </div>
    </div>
  );
};

const QuizCard: React.FC<{ title: string, onClick: () => void, icon: React.ReactNode }> = ({ title, onClick, icon }) => (
  <button onClick={onClick} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-400 transition-all text-left flex flex-col items-start group">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <div className="mt-4 text-xs text-emerald-600 font-bold uppercase tracking-widest flex items-center">Mula Kuiz / Start <ChevronRight size={14} /></div>
  </button>
);

export default QuizPage;
