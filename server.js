const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Store conversation history
let conversationHistory = [];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'AI Chatbot Server is running!' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: message,
    });

    // Create chat completion
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: conversationHistory,
      max_tokens: 500,
      temperature: 0.7,
    });

    const assistantMessage = response.data.choices[0].message.content;

    // Add assistant response to history
    conversationHistory.push({
      role: 'assistant',
      content: assistantMessage,
    });

    res.json({
      success: true,
      message: assistantMessage,
      history: conversationHistory,
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      error: 'Failed to get response from AI',
      details: error.message,
    });
  }
});

// Clear conversation history
app.post('/api/clear', (req, res) => {
  conversationHistory = [];
  res.json({ message: 'Conversation cleared' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 AI Chatbot Server running on http://localhost:${PORT}`);
});
