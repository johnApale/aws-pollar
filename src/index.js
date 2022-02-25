import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import Sidebar from "./pages/Sidebar";
import NavBar from "./pages/Topbar";

import "./App.css";
import "./components/Navbar.css";

// Get AWS exports to configure app
Amplify.configure(config);

ReactDOM.render(
  <AmplifyProvider>
    <Navbar />
    <App />
  </AmplifyProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
