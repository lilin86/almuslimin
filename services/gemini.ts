
import { GoogleGenAI, Type } from "@google/genai";

// Always use the named parameter for apiKey and directly use process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are AlMuslimin Alim, a bilingual (Bahasa Melayu and English) AI assistant for Islamic guidance.
Primary language: Bahasa Melayu. Secondary language: English.

Guidelines:
1. Respond primarily in the language the user uses, but always provide key Islamic terms in both Bahasa Melayu and English (e.g., "Solat (Prayer)", "Tauhid (Oneness of God)").
2. Provide accurate information based on primary Islamic sources (Quran and authentic Hadith).
3. Use a respectful, warm, and professional tone.
4. For Fiqh matters, prioritize the Shafi'i school as it is common in the Malay world, but mention other major views if relevant.
5. If the user asks in Bahasa Melayu, provide an English summary or key terms translation at the end.
6. If the user asks in English, provide the Bahasa Melayu equivalents for important terms.
7. Use markdown for formatting, including Arabic text when relevant.
`;

/**
 * Sends a message to the AI assistant with conversation history.
 */
export async function askAI(prompt: string, currentLang: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    // Using gemini-3-pro-preview for complex reasoning tasks as per guidelines
    const model = 'gemini-3-pro-preview';
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\nUser's current preferred system language is ${currentLang === 'bm' ? 'Bahasa Melayu' : 'English'}. Adjust your response style accordingly.`,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message: prompt });
    return {
      text: result.text,
      grounding: result.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}

/**
 * Generates a daily inspirational verse or hadith.
 */
export async function getDailyInspiration(lang: 'bm' | 'en') {
  const model = 'gemini-3-flash-preview';
  const prompt = `Generate a short, inspiring Quranic verse or authentic Hadith. Provide it in: 1. Arabic 2. Bahasa Melayu 3. English. Include a 1-sentence reflection in ${lang === 'bm' ? 'Bahasa Melayu' : 'English'}. Return in clean text format.`;
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are an inspiring bilingual mentor.",
        temperature: 0.8
      }
    });
    return response.text;
  } catch (error) {
    return lang === 'bm' 
      ? "Yang terbaik di antara kamu adalah yang paling baik akhlaknya. (Hadis)"
      : "The best of you are those who have the best character. (Hadith)";
  }
}

/**
 * Generates a quiz based on an Islamic category.
 */
export async function generateQuiz(category: string, lang: 'bm' | 'en') {
  // Using gemini-3-pro-preview for complex reasoning and quiz generation
  const model = 'gemini-3-pro-preview';
  const prompt = `Generate 5 multiple-choice questions about ${category} in Islam. 
  IMPORTANT: Each question and explanation must be BILINGUAL. Use Bahasa Melayu as the primary text and English as secondary.
  Format: "Soalan (Question)", "Pilihan (Option)", "Penjelasan (Explanation)".`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswerIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswerIndex", "explanation"]
          }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Quiz generation failed:", error);
    return [];
  }
}
