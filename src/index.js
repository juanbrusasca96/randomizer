import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Card from './components/card/Card';
import { queHacerList } from './utils/utils';
import NavBar from './components/navbar/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavBar />
      <Card list={queHacerList} />
    </div>,
    errorElement: <div>error</div>,
  },
  {
    path: "dotaRandom",
    element: <div>
      <NavBar />
      <div>hola</div>
    </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
