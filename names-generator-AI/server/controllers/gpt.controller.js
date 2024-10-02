const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateNames(req, res) {
  const description = req.body.description;
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate 12 unique and creative names for a social media handle or shop based on this ${description}.
    Provide only the names and only with single word, separated by newlines, without any additional text or numbering`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const generatedNames = text
      .split("\n")
      .filter((name) => name.trim() !== "");
    const errorMessage =
      "Invalid response from AI. Try giving a more descriptive description or your description might contain some offensive words. Try with a different description.";

    // Check if the first generated name has more than one word
    const invalidResponse =
      generatedNames.length > 0 && generatedNames[0].split(/\s+/).length > 1;

    if (generatedNames.length === 0 || invalidResponse) {
      throw new Error(errorMessage);
    }

    console.log(generatedNames.length);

    res.status(200).json({ generatedNames });
  } catch (error) {
    console.error("Error generating names:", error);
    res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = { generateNames };
