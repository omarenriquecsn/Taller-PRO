import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./CONTEXT/UserList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <UsersProvider>
      <App />
    </UsersProvider>
    </BrowserRouter>
  </StrictMode>
);
