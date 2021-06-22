import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./components/css/main.css";

import Todo from "./components/Todo";

const Main = () => {
  const [colorMode, setColorMode] = useState(false);
  const toggleColorModeHandle = () => {
    setColorMode((prev) => !prev);
  };
  return (
    <div className="body">
      <header>
        <img
          style={!colorMode ? { opacity: 1 } : null}
          className="desktop"
          src="./images/bg-desktop-dark.jpg"
          alt="bg-desktop-dark"
        />
        <img
          style={colorMode ? { opacity: 1 } : null}
          className="desktop"
          src="./images/bg-desktop-light.jpg"
          alt="bg-desktop-light"
        />
        <img
          style={!colorMode ? { opacity: 1 } : null}
          className="mobile"
          src="./images/bg-mobile-dark.jpg"
          alt="bg-desktop-dark"
        />
        <img
          style={colorMode ? { opacity: 1 } : null}
          className="mobile"
          src="./images/bg-mobile-light.jpg"
          alt="bg-desktop-light"
        />
      </header>
      <main className={colorMode ? "light" : null}>
        <Todo
          colorMode={colorMode}
          toggleColorModeHandle={toggleColorModeHandle}
        />
      </main>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
