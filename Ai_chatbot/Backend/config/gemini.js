import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
config();

if (!process.env.GEMINI_API_KEY) {
  console.error("Error: API_KEY is Missing");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default model;
