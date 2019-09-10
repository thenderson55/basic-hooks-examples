import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter'

function App() {
  return (
    <div className="App" data-test="app-component">
      <HookCounter name="bobby"></HookCounter>
    </div>
  );
}

export default App;
