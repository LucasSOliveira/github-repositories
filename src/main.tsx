import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Providers from "./providers";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </React.StrictMode>
);
