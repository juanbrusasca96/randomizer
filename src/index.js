import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Card from './components/card/Card';
import { queHacerList } from './utils/utils';
import NavBar from './components/navbar/NavBar';
import CardHero from './components/cardHero/CardHero';
import LolRandom from './components/lolRandom/LolRandom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavBar />
      <Card />
    </div>,
    errorElement: <div>error</div>,
  },
  {
    path: "/dotaRandom",
    element: <div>
      <NavBar />
      <CardHero />
    </div>,
  },
  {
    path:"/lolRandom",
    element:<div>
      <NavBar/>
      <LolRandom/>
    </div>
  },
  {
    path: "*",
    element: <div>
      <NavBar />
      <Card />
    </div>,
    errorElement: <div>error</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
