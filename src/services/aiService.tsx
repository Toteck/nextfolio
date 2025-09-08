import { GoogleGenerativeAI } from "@google/generative-ai";

// Obtenha a chave de API das variáveis de ambiente de forma segura
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("A chave da API do Gemini não foi encontrada nas variáveis de ambiente.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Função centralizada para fazer a chamada à API com tratamento de erro
async function generateText(prompt: string, fallbackText: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Erro ao gerar conteúdo com a API do Gemini:", error);
    // Retorna o texto original (fallback) em caso de erro.
    return fallbackText; 
  }
}

/**
 * Melhora um resumo profissional para torná-lo mais impactante.
 * @param resumo O texto do resumo profissional.
 * @returns A versão aprimorada ou o texto original em caso de erro.
 */
export async function melhorarResumo(resumo: string): Promise<string> {
  const prompt = `Melhore o seguinte resumo profissional para um currículo, deixando-o mais claro e impactante: ${resumo}`;
  return generateText(prompt, resumo);
}

/**
 * Aprimora a descrição de uma experiência profissional.
 * @param experiencia A descrição da experiência.
 * @returns A versão aprimorada ou o texto original em caso de erro.
 */
export async function melhorarExperiencia(experiencia: string): Promise<string> {
  const prompt = `Aprimore e formate a seguinte descrição de experiência profissional para um currículo, usando bullet points para listar responsabilidades e conquistas. O texto deve ser conciso e focado em resultados: ${experiencia}`;
  return generateText(prompt, experiencia);
}

/**
 * Corrige a gramática e a ortografia de um texto genérico.
 * @param texto O texto a ser corrigido.
 * @returns A versão corrigida ou o texto original em caso de erro.
 */
export async function corrigirTextoGenerico(texto: string): Promise<string> {
  const prompt = `Corrija a gramática e a ortografia do seguinte texto. Não adicione novas informações, apenas corrija o que for necessário: ${texto}`;
  return generateText(prompt, texto);
}