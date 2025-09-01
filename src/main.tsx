
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// importa o provider do contexto
import { CurriculoProvider } from "./context/CurriculoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurriculoProvider>
      <App />
    </CurriculoProvider>
  </React.StrictMode>
);
