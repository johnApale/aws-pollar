import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
import {Amplify} from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";

//import NavBar from "./components/NavBar/NavBar";
//import "./components/NavBar/NavBar.css";

import awsExports from './aws-exports';

// Get AWS exports to configure app

ReactDOM.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
