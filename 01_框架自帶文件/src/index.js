import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//渲染元件App到頁面
root.render(
  //使用React.StrictMode包裹App組件，可以自動檢查該組件裡的所有子組件的代碼是否合理
  //因為React版本會更新，有些舊的代碼會淘汰不再支援，StrictMode會依據當前的規定去查錯
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
