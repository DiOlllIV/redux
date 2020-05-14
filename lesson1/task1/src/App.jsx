import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };
    }

    toggleTheme = () => {
        const newTheme = this.state.theme === themes.dark ?
            themes.light : themes.dark

            this.setState({
                theme: newTheme,
            });
    };

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton
                        onClick={this.toggleTheme}
                    >
                        Dynamic Theme
                    </ThemedButton>
                </ThemeContext.Provider>
                <ThemedButton
                    onClick={this.toggleTheme}
                >
                    Defaut Theme
                </ThemedButton>
            </div>
        );
    }
}

export default App;