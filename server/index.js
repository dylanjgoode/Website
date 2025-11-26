import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Load Knowledge Base
const knowledgeBasePath = path.join(__dirname, 'knowledge_base.txt');
let knowledgeBase = '';
try {
    knowledgeBase = fs.readFileSync(knowledgeBasePath, 'utf-8');
} catch (err) {
    console.error('Error reading knowledge base:', err);
}

// Initialize Chat Model
const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-5-mini", // or gpt-4
    streaming: true,
});

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const systemPrompt = `You are a helpful and professional AI assistant for RGC Technologies.
    Use the following information about the company to answer the user's questions.
    If the answer is not in the information provided, politely ask the user to contact us directly at info@rgc.ie or +353 1663 6999.
    Keep your answers concise and friendly.

    IMPORTANT: Format your response using Markdown. Use bullet points, bold text, and headers where appropriate to make the information easy to read.

    Company Information:
    ${knowledgeBase}`;

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Transfer-Encoding', 'chunked');

        const stream = await chatModel.stream([
            new SystemMessage(systemPrompt),
            new HumanMessage(message),
        ]);

        for await (const chunk of stream) {
            res.write(chunk.content);
        }

        res.end();

    } catch (error) {
        console.error('Error processing chat:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.end();
        }
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
