import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

function App() {
  return (
    <div className="App">
      <h1>To do app</h1>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/add" component={AddUser}/>
          <Route path="/edit/:id" component={EditUser}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
