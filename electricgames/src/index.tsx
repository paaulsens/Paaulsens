import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameProvider from './Contexts/GameContext';
import QuizProvider from './Contexts/QuizContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </GameProvider>
  </React.StrictMode>
);
