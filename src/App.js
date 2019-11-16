import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar.component' 
import Home from './pages/home.page';
import UserProfile from './pages/UserProfile.page';
import GitHubProvider from './context/github/gitHubProvider';
import './App.css';

function App(props){
    return  (
      <div className="App">
        <Navbar />
        <Router>
          <GitHubProvider>
            <Switch>
              {/* home page route */}
              <Route exact path = "/">
                <Home />
              </Route>
              {/* user profil route */}
              <Route path="/user/:login">
                <UserProfile />
              </Route>
            </Switch>
          </GitHubProvider>
        </Router>
      </div>
    );
  
}
export default App;
