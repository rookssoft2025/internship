import model from "../config/gemini.js";
import prompt from "../utils/prompt.js";

export const chatWithAI = async (req, res, next) => {
  try {
    const { message } = req.body;
    const result = await model.generateContent(`${prompt}\nUser: ${message}`);
    const response = await result.response;
    const text = response.text();
    console.log("AI Response:", text);
    
    res.status(200).json({
      success: true,
      reply: text,
    });
  } catch (error) {
    next(error);
  }
};
