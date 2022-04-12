import React, { FC } from 'react';
import './App.css';
import RootComponent from './component/index';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Root Component</h1>
        <RootComponent />
      </header>
    </div>
  );
}

export default App;
