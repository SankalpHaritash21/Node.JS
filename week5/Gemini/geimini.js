const { GoogleGenerativeAI } = require("@google/generative-ai");
// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_Key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Generate = async () => {
  try {
    const prompt = "Write a story about a Solo Leveling.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.log(error);
  }
};

Generate();
