// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

let root = null;

function mount() {
  const container = document.getElementById("root");
  if (!root) root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}

if (!window.__POWERED_BY_WUJIE__) {
  mount();
}

window.__WUJIE_MOUNT = mount;
window.__WUJIE_UNMOUNT = unmount;
