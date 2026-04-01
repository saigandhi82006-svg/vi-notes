import React from 'react';
import './index.css';
import Editor from './components/Editor/Editor';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Vi-Notes</h1>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  );
}

export default App;
