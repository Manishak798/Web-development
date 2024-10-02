# Name Generator AI

A sophisticated React TypeScript application that leverages the power of Google's Gemini API to generate unique and creative names based on user-provided descriptions. This project showcases modern web development practices and integrates cutting-edge AI technology.

![Alt text](https://github.com/bobbyy16/names-generator-AI/blob/main/client/public/name-generator.png)

## 🌟 Features

- Intuitive user interface for inputting descriptions
- Generates up to 12 unique and creative names
- Responsive design with a modern aesthetic using Tailwind CSS
- Real-time name generation with loading indicators
- Local storage integration for persisting generated names
- Error handling and user feedback

## 🛠 Technologies Used

- **Frontend**:
  - React 18
  - TypeScript 5
  - Tailwind CSS 3
  - Vite (for fast builds and hot module replacement)
- **Backend**:
  - Node.js
  - Express.js
- **API**:
  - Google Gemini API
- **Model**:
  - gemini-1.5-flash (state-of-the-art language model)

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/names-generator-AI.git
   cd names-generator-AI
   ```

2. Install dependencies for both client and server:

   ```bash
   npm run install-all
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory and add your Google API key:

   ```
   GOOGLE_API_KEY=your_api_key_here
   ```

   You can obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

4. Start the development servers:
   ```bash
   npm run dev
   ```
   This command will concurrently start both the backend server and the frontend development server.

## 🚀 Usage

1. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).
2. Enter a descriptive phrase or concept in the input field.
3. Click the "Generate Names" button.
4. View the list of unique, AI-generated names based on your input.
5. Generated names are automatically saved and will persist across browser sessions.

## 🤝 Contributing

We welcome contributions to improve the Name Generator AI! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code adheres to our coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Google Gemini API](https://ai.google.dev/docs) - Advanced language model API
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

---

Developed with ❤️ by [Abhishek](https://github.com/bobbyy16)

For any questions or support, please open an issue or contact us at [bobbyyyyy16@gmail.com].
