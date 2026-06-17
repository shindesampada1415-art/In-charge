# AI Chatbot 🤖

A powerful AI-powered chatbot built with Node.js, Express, React, and OpenAI API.

## Features

✨ **Real-time Chat** - Instant responses from OpenAI's GPT model

💾 **Conversation History** - Keep track of all conversations

🎨 **Beautiful UI** - Clean and responsive React interface

⚡ **Fast & Reliable** - Built with Express.js backend

🔒 **Secure** - Environment variables for API keys

## Prerequisites

- Node.js (v14+)
- npm or yarn
- OpenAI API Key (get it from https://platform.openai.com)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/shindesampada1415-art/In-charge.git
cd In-charge
```

### 2. Setup Backend

```bash
# Install backend dependencies
npm install

# Create .env file
cp .env.example .env

# Add your OpenAI API key to .env
OPENAI_API_KEY=your_api_key_here
```

### 3. Setup Frontend

```bash
# Navigate to client folder (you'll need to create this)
mkdir client
cd client

# Create React app
npx create-react-app .

# Install axios for API calls
npm install axios
```

## Running the Application

### Start Backend

```bash
# Development mode with auto-reload
npm run dev

# Or production mode
npm start
```

Server will run on: `http://localhost:5000`

### Start Frontend

```bash
# In another terminal, from client folder
cd client
npm start
```

App will open at: `http://localhost:3000`

## API Endpoints

### POST `/api/chat`
Send a message to the chatbot

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "success": true,
  "message": "I'm doing well, thank you for asking!",
  "history": [...]
}
```

### POST `/api/clear`
Clear conversation history

## Environment Variables

Create a `.env` file with:

```
OPENAI_API_KEY=your_openai_api_key
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## Project Structure

```
In-charge/
├── server.js           # Express server
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── README.md          # This file
└── client/            # React frontend (create this)
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   └── ChatBox.js
    │   └── styles/
    └── package.json
```

## Getting OpenAI API Key

1. Go to https://platform.openai.com/account/api-keys
2. Sign up or login
3. Click "Create new secret key"
4. Copy and paste it in your `.env` file

## Troubleshooting

**Issue:** "Error: 401 Unauthorized"
- Check if your OpenAI API key is correct

**Issue:** "CORS Error"
- Make sure the frontend is running on http://localhost:3000

**Issue:** "Connection refused"
- Make sure backend is running on http://localhost:5000

## Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **AI:** OpenAI GPT-3.5-turbo
- **Database:** MongoDB (optional)
- **Styling:** CSS/Tailwind CSS

## License

MIT

## Author

Sampada Shinde

---

**Happy Chatting!** 🚀
