import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./Pages/signUp/index.jsx";
import GlobalStyles from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <SignUp />
  </React.StrictMode>
);
