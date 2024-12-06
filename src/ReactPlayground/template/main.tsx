import './import-map.json'
import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
ReactDOM.createRoot(document.getElementById('root')!).render(
 // 使用React.StrictMode来包裹组件，以帮助发现潜在的问题
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
 )