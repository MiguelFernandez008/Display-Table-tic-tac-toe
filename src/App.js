import React from 'react';
import Board from './components/board/Board';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Tic Tac Toe</h1>
      </header>
      <Board />
      
    </div>
  );
}

export default App;
