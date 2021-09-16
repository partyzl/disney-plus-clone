import React from 'react';
import './App.css';
import {Header} from './components'
import {Home, Details} from './pages'

function App() {
  return (
    <div className="App">
      < Header />
      <Home />
      <Details />
    </div>
  );
}

export default App;
