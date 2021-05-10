import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskmonitor from './pages/Taskmonitor'
import Manager from './pages/manager'
import Main from './layouts/Main'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import Logout from './pages/Logout'



function App() {
  return (
    <Router>
     <Switch>

      <Route path="/" exact><Main><Home /></Main></Route>
        <Route path="/login"><Main><Login /></Main></Route>
         <Route path="/manager"><Main><Manager /></Main></Route>
         <Route path="/dashboard"><Main><Dashboard /></Main></Route>
         <Route path="/logout"><Main><Logout /></Main></Route>
         
         <Route path="" component={Notfound}/>


     </Switch>


    </Router>
  );
}

export default App;
