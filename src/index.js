import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <footer>
      <div className="policy">
        This app doesn't store any of your data. We don't have a database for
        that.
      </div>
      <ul>
        <li>
          <a href="https://github.com/nosfeeferatu">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/naseefmashood/">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/nosfeeferatu">Twitter</a>
        </li>
      </ul>
    </footer>
  </StrictMode>
);
