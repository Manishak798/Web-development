"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNames = void 0;
const axios_1 = __importDefault(require("axios"));
const HUGGING_FACE_API_KEY = process.env.HUGGING_FACE_API_KEY;
const generateNames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description } = req.body;
    if (!description || typeof description !== "string") {
        res.status(400).json({
            error: "Invalid description: Please provide a string description.",
        });
        return;
    }
    try {
        const prompt = `Generate 5 unique and creative names for a social media handle or shop based on this : "${description}". Provide only the names, separated by newlines, without any additional text or numbering.

Names:
1.`;
        const response = yield axios_1.default.post("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B", {
            inputs: prompt,
            parameters: {
                max_new_tokens: 100,
                temperature: 0.8,
                top_k: 50,
                top_p: 0.95,
                num_return_sequences: 1,
                do_sample: true,
                return_full_text: false,
            },
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
            },
        });
        if (response.status !== 200) {
            throw new Error(response.data.error || "Failed to generate names");
        }
        const generatedText = response.data[0].generated_text.trim();
        const generatedNames = generatedText
            .split("\n")
            .map((name) => name.replace(/^\d+\.\s*/, "").trim())
            .filter((name) => name !== "" && !name.toLowerCase().startsWith("names:"))
            .slice(0, 5);
        if (generatedNames.length < 5) {
            throw new Error("Failed to generate enough unique names");
        }
        res.status(200).json({ names: generatedNames });
    }
    catch (error) {
        console.error("Error generating names:", error);
        res
            .status(error instanceof Error && error.message.includes("Failed to generate")
            ? 400
            : 500)
            .json({
            error: error instanceof Error
                ? error.message
                : "An unexpected error occurred",
        });
    }
});
exports.generateNames = generateNames;
