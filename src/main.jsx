import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProfilSlice from "./feature/ProfilSlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";

const store = configureStore({
  reducer: {
    user: ProfilSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
