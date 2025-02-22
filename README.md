# AI Movie Character Chatbot 🎬

An interactive AI-powered chatbot that lets you have conversations with your favorite movie characters. Built with React, TypeScript, and WebSocket for real-time communication.

## 🌟 Features

- Real-time chat with movie characters using WebSocket
- Character selection from popular movies
- Beautiful, responsive UI with Tailwind CSS
- Performance optimized with code splitting and compression
- Web Vitals monitoring
- Global leaderboard system
- Comprehensive API documentation

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **State Management**: React Query
- **Real-time Communication**: Socket.IO
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Performance**: Web Vitals, Vite Compression

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jayeshbn/AI-movie-chatbot.git
   cd AI-movie-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_WS_URL=ws://localhost:3000
   ```

## 🏃‍♂️ Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

1. Create a production build:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## 📦 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── services/         # WebSocket and API services
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## 🔧 Configuration

### WebSocket Configuration

The WebSocket connection URL can be configured through the `VITE_WS_URL` environment variable. Make sure to set this to your WebSocket server's URL before deploying.

### Build Configuration

The project uses Vite with optimized build settings:
- Gzip and Brotli compression
- Code splitting
- Tree shaking
- Minification with Terser

## 📈 Performance Monitoring

The application includes Web Vitals monitoring for:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

## 🌐 API Documentation

API documentation is available at `/docs` route in the application. It includes:
- Available endpoints
- Request/response formats
- Authentication requirements
- Rate limiting information

## 🏆 Leaderboard System

The leaderboard system tracks:
- User progress through levels
- Achievement unlocks
- Global rankings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🙏 Acknowledgments

- Movie scripts data from IMSDb and SimplyScripts
- Icons from Lucide React
- UI components styled with Tailwind CSS