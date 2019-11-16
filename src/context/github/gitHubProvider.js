import React, {useReducer} from 'react';
import axios from 'axios';

import GitHubContext from './gitHubContext';
import GitHubReducer from './gitHubReducer';
import * as config from '../../envConfig';

import {
    SEARCH_USERS,
    GET_USER,
    GET_USER_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const GitHubProvider = props => {
    const initialState = {
        users : [],
        user : {},
        userRepos : [],
        loading : false,
        alert : {},
    };

    const [state, dispatch] = useReducer(GitHubReducer, initialState);
    // search users function
    const searchUsers = async (query) => {
        dispatch({type : SET_LOADING, payload : true});
    const response = await axios.get(
      `${config.apiURI}/search/users?client_id=${config.clientId}&client_secret=${config.clientSecret}&q=${query}`,
    );
    // console.log(response);
    if (
        response.status===200 && 
        response.statusText ==="OK" &&
        response.data.items.length
    ) {
      dispatch({ type : SEARCH_USERS, payload: response.data.items });
      dispatch ({type: SET_ALERT, payload :{
        type: 'success', 
        message : `${response.data.items.length} GitHub users has been found!`,
      },
    });                
    } else {
        dispatch({ type : SEARCH_USERS, payload: [] });
        dispatch({
            type: SET_ALERT, 
            payload : {
                type: 'error', 
                message : 'NO user found, Please TRY again!',
            },
        });
    } 
    dispatch({type : SET_LOADING, payload : false});
  };    
    // get user
    const getUser = async(username) => {
        dispatch({type : SET_LOADING, payload : true});
        const response = await axios.get(
        `${config.apiURI}/users/${username}?client_id=${config.clientId}&client_secret=${config.clientSecret}`
        );
        if (response.status===200 && response.statusText ==="OK") {
            dispatch({type : GET_USER , payload : response.data});
        }
        dispatch({type : SET_LOADING, payload : false});
    };

    const getUserRepos= async(username)=>{
        dispatch({type : SET_LOADING, payload : true});
        const response = await axios.get(
          `${config.apiURI}/users/${username}/repos?client_id=${config.clientId}&client_secret=${config.clientSecret}`
        );
        // console.log(response);
        if (response.status===200 && 
            response.statusText ==="OK" && 
            response.data.length) {
          dispatch({type: GET_USER_REPOS ,payload : response.data})
        }
        dispatch({type : SET_LOADING, payload : false});
    };

    const removeAlert = () => dispatch({type: REMOVE_ALERT, payload: {}});

    return <GitHubContext.Provider value={{
        users : state.users,
        user : state.user,
        userRepos : state.userRepos,
        loading : state.loading,
        searchUsers:searchUsers,
        getUser : getUser,
        getUserRepos : getUserRepos,
        alert : state.alert,
        removeAlert: removeAlert,
    }}>
        {props.children}
    </GitHubContext.Provider>
};

export default GitHubProvider;