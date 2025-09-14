# 🎮 Guess the Word (Two-Player)

A classic two-player word-guessing game built with React. Player 1 sets a secret word, and Player 2 tries to guess it before running out of attempts. Challenge your friends!

***

[**Live Demo Link**](https://guess-the-word-react.vercel.app/)

![Project Demo GIF](https://github.com/257divyanshu/guess-the-word/blob/main/demo.gif?raw=true)

***

## ✨ Features

This project showcases a modern frontend architecture and a variety of development techniques.

* **Component-Based Architecture:** Built with reusable and modular React components for a clean and maintainable codebase.
* **Centralized State Management:** Utilizes React's Context API to manage the game's complex state (like guesses, secret word, and game status) globally, avoiding prop-drilling.
* **External API Integration:** Connects to a dictionary API to perform real-time validation of word submissions.
* **Engaging Animations:** Integrates Lottie files to display smooth, high-quality animations for win/loss screens, significantly enhancing the user experience.
* **Fully Responsive Design:** Employs Tailwind CSS for a mobile-first approach, ensuring a seamless and accessible experience across all devices.

***

## 🛠️ Tech Stack

* **Library:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **State Management:** `useState` & Context API
* **Animations:** Lottie

***

## 📂 Project Structure

The project is organized with a clear and scalable structure.

```
/
├── public/              # Static assets, icons, and Lottie animations
├── src/
│   ├── components/      # Reusable React components for UI elements
│   ├── context/         # React Context for global state management (GameContext)
│   ├── services/        # API calls and external service logic (validateWord)
│   ├── App.jsx          # Main application component and router setup
│   └── main.jsx         # Entry point of the React application
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

***

## 📖 How to Play

The game is played in two phases: setting the word and guessing the word.

### **For Player 1 (The Word Setter):**

1.  **Start:** From the welcome screen, begin the setup process.
2.  **Select Length:** Choose the length of the secret word you have in mind.
3.  **Enter Word:** Type your secret word and submit it.
4.  **Hand it Over:** Pass the device to Player 2 to start the guessing phase!

### **For Player 2 (The Guesser):**

1.  **Guess:** Enter a valid word of the correct length and submit it.
2.  **Analyze Feedback:** After each guess, the tiles will change color:
    * 🟩 **Green:** The letter is correct and in the right position.
    * 🟨 **Yellow:** The letter is in the word but in the wrong position.
    * ⬜ **Gray:** The letter is not in the word at all.
3.  **Win or Lose:** Use the clues to figure out the word before you run out of attempts. Good luck!