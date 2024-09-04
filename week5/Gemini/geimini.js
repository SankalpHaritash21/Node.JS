const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";

app.get("/", (req, res) => {
  res.send("Hello World");
});
require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_Key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Generate = async () => {
  try {
    const prompt = "Write a story about a Solo Leveling.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.log(error);
  }
};

// Generate();

app.get("/api/constent", async (req, res) => {
  try {
    const d = req.body.question;
    const r = await Generate();
    res.send({
      result: r,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port: 3000");
});
