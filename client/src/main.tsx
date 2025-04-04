import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CursorProvider } from "./contexts/CursorContext";

createRoot(document.getElementById("root")!).render(
  <CursorProvider>
    <App />
  </CursorProvider>
);
