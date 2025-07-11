const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Allow only your frontend's domain (onRender.com)
const allowedOrigins = ['https://gemini-clone-1-q5ix.onrender.com'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // ✅ Use GEMINI_API_KEY here (not REACT_APP_...)

app.post('/api/gemini', async (req, res) => {
    try {
        const { prompt } = req.body;
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.send(text);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating content');
    }
});
app.get('/', (req, res) => {
    res.send('✅ Gemini backend is up and running!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
