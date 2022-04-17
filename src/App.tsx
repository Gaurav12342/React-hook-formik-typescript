import React, { FC } from 'react';
import './App.scss';
import RootComponent from './views/Login/index';

const App: FC = () => {
  return (
    <div className="App">
      <RootComponent />
    </div>
  );
}

export default App;
