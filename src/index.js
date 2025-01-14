import React, { StrictMode } from "react";
import App from "./App";
import './style.css';
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);