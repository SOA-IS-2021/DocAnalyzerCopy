import React, { useEffect, useState } from "react";
import "./styles/css/App.css";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import LogInScreen from "./components/LogInScreen";
import HomeScreen from "./components/HomeScreen";
import UserNamesScreen from "./components/UserNamesScreen";
import Callback from "./components/Callback";
import axios from "axios";
import { BaseURL } from "./constants";
import Header from "./components/UI/Header";
import {UserManager} from "oidc-client";
import {log} from "util";

export let mgr:UserManager;

const App = () => {
  const [token, setToken]: any = useState();
  const history = useHistory();

  // @source https://identityserver4.readthedocs.io/en/latest/quickstarts/4_javascript_client.html
  let config = {
    authority: "http://identity-server:5000",
    client_id: "mvc",
    client_secret: "secret",
    redirect_uri: "http://localhost:3000/home",
    response_type: "code",
    scope: "openid api1",
    post_logout_redirect_uri: "http://localhost:3000/index.html",
    metadata: {
      authorization_endpoint : "http://localhost:5000/connect/authorize",
      end_session_endpoint: "http://localhost:5000/connect/endsession",
      userinfo_endpoint: "http://localhost:5000/connect/userinfo",
      jwks_uri: "http://localhost:5000/.well-known/openid-configuration/jwks",
    }
  };
  mgr = new UserManager(config);

  mgr.getUser().then( (user) => {
    if (user) {
      console.log("User logged in" + user.profile);
    }
    else {
      console.log("User not logged in");
      mgr.signinRedirectCallback();
    }
  });



  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {<Route path="/" exact>
            <LogInScreen setToken={setToken} />
          </Route>}
          <Route path="/home">
            <Header />
            {/*<HeaderBar setToken={setToken} />*/}
            <HomeScreen />
          </Route>
          <Route path="/usernames">
            <Header />
            {/*<HeaderBar setToken={setToken} />*/}
            <UserNamesScreen  />
          </Route>
          <Route path="/callback">
            <Header />
            {/*<HeaderBar setToken={setToken} />*/}
            <Callback />
          </Route>
          <Redirect to="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};


// token={token}



export default App;