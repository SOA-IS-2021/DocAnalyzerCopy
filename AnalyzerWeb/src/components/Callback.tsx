
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "../reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {UserManager} from "oidc-client";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#184f81" // This is an orange looking color
        },
        secondary: {
            main: "#f61067" //Another orange-ish color
        }
    }
});
const Callback = () => {
    return(
        <Call />
    );

}
const Call = () => {
        new UserManager({response_mode:"query"}).signinRedirectCallback().then(function() {
        window.location.href = "index.html";
    }).catch(function(e) {
        console.error(e);
    });
        return (<div>Callback Page</div>)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Callback;
