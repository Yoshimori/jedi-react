import React from 'react';
import './App.css';

import List from './components/list/list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={"list"}>
            <List/>
        </div>
      </header>
    </div>
  );
}

export default App;
