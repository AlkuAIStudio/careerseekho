// ==========================================
// BHARATBUDDY AI - SERVER
// Gemini AI + Express
// ==========================================

require("dotenv").config();

const express = require("express");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------------------------------
// BASIC SETTINGS
// ------------------------------------------

app.use(express.json({ limit: "2mb" }));
// CORS - GitHub Pages frontend ko Render API access dene ke liye
app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "https://alkuaistudio.github.io"
    );

    res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS"
    );

    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

// Serve frontend files
app.use(
    express.static(__dirname, {
        dotfiles: "ignore"
    })
);

// ------------------------------------------
// GEMINI SETUP
// ------------------------------------------

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY nahi mili.");
    console.error("👉 .env file me GEMINI_API_KEY=YOUR_KEY add karo.");
}

const ai = new GoogleGenAI({
    apiKey: API_KEY
});

// ------------------------------------------
// HEALTH CHECK
// ------------------------------------------

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "BharatBuddy AI server is running 🚀"
    });
});

// ------------------------------------------
// AI CHAT
// ------------------------------------------

app.post("/api/chat", async (req, res) => {
    try {
        const message = String(req.body?.message || "").trim();

        if (!message) {
            return res.status(400).json({
                success: false,
                error: "Message is required."
            });
        }

        if (!API_KEY) {
            return res.status(500).json({
                success: false,
                error: "Gemini API key is not configured."
            });
        }

        console.log("🤖 AI Request:", message.substring(0, 100));

        const interaction = await ai.interactions.create({
            model: "gemini-3.6-flash",
            input: `
You are BharatBuddy AI, a friendly Indian AI learning and career assistant.

Your job is to help students with:
- School studies
- Physics
- Chemistry
- Mathematics
- Coding
- Programming
- English practice
- Career guidance
- Study planning
- General educational doubts

Rules:
1. Explain concepts simply.
2. Use examples whenever useful.
3. Be encouraging and student-friendly.
4. If the student asks for code, provide working code and explain it.
5. For study questions, give step-by-step explanations.
6. Do not pretend to know something if you are unsure.
7. Keep answers reasonably clear and organized.

Student's question:
${message}
            `.trim()
        });

        const answer = interaction.output_text;

        if (!answer) {
            return res.status(500).json({
                success: false,
                error: "AI ne koi response nahi diya."
            });
        }

        console.log("✅ AI Response received");

        return res.json({
            success: true,
            answer: answer
        });

    } catch (error) {
        console.error("❌ Gemini Error:");

        console.error(error);

        const status =
            error?.status ||
            error?.statusCode ||
            error?.response?.status;

        // ------------------------------------------
        // RATE LIMIT / QUOTA
        // ------------------------------------------

        if (status === 429) {
            return res.status(429).json({
                success: false,
                error: "BharatBuddy AI ka Gemini request limit abhi reach ho gaya hai. Thodi der baad dobara try karo."
            });
        }

        // ------------------------------------------
        // AUTH / API KEY ERROR
        // ------------------------------------------

        if (status === 401 || status === 403) {
            return res.status(status).json({
                success: false,
                error: "Gemini API key invalid hai ya access allowed nahi hai."
            });
        }

        // ------------------------------------------
        // GENERAL ERROR
        // ------------------------------------------

        return res.status(500).json({
            success: false,
            error: "BharatBuddy AI temporarily unavailable hai. Server console check karo."
        });
    }
});

// ------------------------------------------
// 404 API HANDLER
// ------------------------------------------

app.use("/api", (req, res) => {
    res.status(404).json({
        success: false,
        error: "API route not found."
    });
});

// ------------------------------------------
// START SERVER
// ------------------------------------------

app.listen(PORT, () => {
    console.log("");
    console.log("==========================================");
    console.log("🇮🇳 BHARATBUDDY AI");
    console.log("==========================================");
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔑 Gemini API: ${API_KEY ? "FOUND ✅" : "NOT FOUND ❌"}`);
    console.log("==========================================");
    console.log("");
});