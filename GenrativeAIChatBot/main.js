
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = 'AIzaSyAgYrxOmywPgpR23gkMpcKDsNo5IDaBF4o';
const genAI = new GoogleGenerativeAI(API_KEY);

// document.addEventListener('DOMContentLoaded', () => {



// });
const userinput = document.getElementById('userinput');
const msgs = document.getElementById('msg');
async function run() {
    const userInputValue = userinput.value.trim();

    if (userInputValue) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: userInputValue,
                },
                {
                    role: "model",
                    parts: "Great to meet you. What would you like to know?",
                },
            ],
            generationConfig: {
                maxOutputTokens: 100,
            },
        });

        const result = await chat.sendMessage(userInputValue);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        msgs.innerHTML = text;
    } else {
        console.log("Please enter some input.");
    }
}