import React, { Component } from 'react'

export default class Search extends Component {
    state ={
        username : '',
    };
    
    mapInputToState = (e) => this.setState({[e.target.name] : e.target.value});
    
    onSearchClick = () => {
        this.setState({username : ''});
        this.props.searchUsers(this.state.username);
    }
    
    render() {
        return (
            <div>
                <div className = "container" style= {{marginTop : '15px'}}>
                    <div className="form-horizontal">
                        <div className="form-group">
                            <div className="column col-10">
                                <input 
                                name="username"
                                className="form-input" 
                                type="text" 
                                id="input-example-1" 
                                placeholder="Github user name..."
                                onChange=  {this.mapInputToState}
                                />
                            </div>
                            <div className="column col-2">
                                <button 
                                className="btn btn-primary btn-block" 
                                onClick={this.onSearchClick}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
