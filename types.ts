
export enum Category {
  Quran = 'Quran',
  Tauhid = 'Tauhid',
  Fiqh = 'Fiqh',
  Hadith = 'Hadith',
  Life = 'Way of Life',
  AI = 'Ask AI'
}

export interface Section {
  id: string;
  title: string;
  category: Category;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface Verse {
  text: string;
  translation: string;
  surah: string;
  ayah: number;
}
