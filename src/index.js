import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3uu33oo2yq1ezxhf.us.auth0.com"
    clientId="6u0WpJpwOlOt9BEHCYyPd4UOQeIVMD1T"
    authorizationParams={{
      redirect_uri: window.location.origin,
      CacheLocation: "localstorage",
    }}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
