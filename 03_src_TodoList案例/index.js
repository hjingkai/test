//引入react核心庫
import React from "react";
//引入ReactDOM
import {createRoot} from "react-dom/client";
//引入App
import App from './App'

//渲染App到頁面
const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);