import React from 'react';
import './App.css';
import {Header} from './components'
import {Home, Details} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/details"><Details/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
