import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar.component' 
import * as config from './envConfig';

import './App.css';
import Home from './pages/home.page';
import UserProfile from './pages/UserProfile.page';


class App extends Component {
  state={
    users: [],
    user: {},
    userRepos: [],
    loading: false,
    alert : {},
  };

  searchUsers = async (query) => {
    this.setState({ loading : true});

    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecret}&q=${query}`,
    );
    // console.log(response);
    if (response.status===200 && 
        response.statusText ==="OK" &&
        response.data.items.length
    ) {
      this.setState({ users : response.data.items,
                      alert : {type: 'success', 
                      message : `${response.data.items.length} GitHub users has been found!`,
                    }})
    }else{
      this.setState({
        alert : {type: 'error', 
        message : 'NO user found, Please TRY again!',
      }});
    }
    this.setState({ loading : false});
  };

  getUser= async(username)=>{
    this.setState({loading : true});
    
    const response = await axios.get(
      `${config.apiURI}/users/${username}?client_id=${config.clientId}&client_secret=${config.clientSecret}`
    );
    if (response.status===200 && response.statusText ==="OK") {
      this.setState({user : response.data})
    }
    this.setState({ loading : false});
  };

  getUserRepos= async(username)=>{
    this.setState({loading : true});
    
    const response = await axios.get(
      `${config.apiURI}/users/${username}/repos?client_id=${config.clientId}&client_secret=${config.clientSecret}`
    );
    console.log(response);
    if (response.status===200 && 
        response.statusText ==="OK" && 
        response.data.length) {
      this.setState({userRepos : response.data})
    }
    this.setState({ loading : false});
  };

  setAlert = () => this.setState({ alert : {} });
  render(){
    return  (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path = "/">
              <Home 
              searchUsers={this.searchUsers} 
              users={this.state.users} 
              loading={this.state.loading} 
              alert={this.state.alert} 
              setAlert= {this.setAlert} />
            </Route>
            {/* user profil route */}
            <Route path="/user/:login">
              <UserProfile 
                getUser = {this.getUser}
                user = {this.state.user} 
                loading = {this.state.loading} 
                getUserRepos = {this.getUserRepos}
                repos = {this.state.userRepos}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
