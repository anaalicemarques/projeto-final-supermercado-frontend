import { createRoot } from "react-dom/client";
import App from "./App";
//import ReactDOM from 'react-dom';
import React from 'react';

const root = createRoot(document.querySelector("#root"));

root.render(<App />);

/*const clearLocalStorage = () => {
    localStorage.clear();
  };
  
  clearLocalStorage();
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );*/