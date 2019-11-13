import React, {Component} from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar.component' 
import Alert from './components/layout/Alert.component';
import Search from './components/search/Search.component';
import UsersGrid from './components/users/UsersGrid.component';
import * as config from './envConfig'
import './App.css';


class App extends Component {
  state={
    users: [],
    loading: false,
  };

  searchUsers = async (query) => {
    this.setState({ loading : true});

    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecret}&q=${query}`,
    );
      if (response.status===200 && response.statusText ==="OK") {
        this.setState({users : response.data.items})
      }
      this.setState({ loading : false});
  };

  render(){
    return  (
      <div className="App">
        <Navbar />
        <Alert />
        <Search searchUsers={this.searchUsers} />
        <UsersGrid  users={this.state.users} loading= {this.state.loading} />
      </div>
    );
  }
}
export default App;
