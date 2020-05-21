import React, {Component} from "react";
import Main from "./components/MainComponent";
import "./App.css";
import {Provider} from "react-redux";
import {ConfigureStore} from "./redux/configureStore";
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Paper from "@material-ui/core/Paper";

const store = ConfigureStore();
const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },

});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Paper style={{minHeight: "1900px"}}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Main/>
                        </BrowserRouter>
                    </Provider>
                </Paper>
            </ThemeProvider>
        );
    }
}

export default App;
