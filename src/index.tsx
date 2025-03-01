import React from 'react';
import ReactDOM from 'react-dom/client';
import MASwebsite from './page/MASwebsite';
import Profile from './page/Profile';  // 대소문자 맞추기

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);
