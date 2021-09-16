import React from 'react';
import './App.css';
import {Header} from './components'
import {Home, Details, Login} from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/details"><Details/></Route>
          <Route path="/login"><Login/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
