import React, { Component } from 'react';
import Header from './Header';
import {UserContext} from './context';

class App extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: 'Nicola Tesla',
                avatar_url: 'https://avatars3.githubusercontent.com/u10001',
            }
        }

    }

    render() {
        console.log(this.state.userData)
        return (
            <UserContext.Provider value={this.state.userData}>
                <Header />
            </UserContext.Provider>
        );
    }
    
}

export default App;