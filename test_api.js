import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true });

const apiKey = process.env.OPENAI_API_KEY;
const model = "gpt-5-mini";

console.log(`Testing API with model: ${model}`);
console.log(`API Key present: ${!!apiKey}`);

async function testApi() {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [{ role: "user", content: "Hello" }],
                max_tokens: 10
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('API Error:', JSON.stringify(data, null, 2));
        } else {
            console.log('API Success:', JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

testApi();
