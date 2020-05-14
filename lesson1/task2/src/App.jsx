import React, { Component } from 'react';
import Header from './Header';
import {user, UserContext} from './context';

class App extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            userData: user
        }

    }

    render() {
        return (
            <UserContext.Provider value={this.state.userData}>
                <Header />
            </UserContext.Provider>
        );
    }
    
}

export default App;