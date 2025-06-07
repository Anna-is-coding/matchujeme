import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, // zde se vykreslí aktuální podstránka podle URL (třeba <Facts />)
} from 'react-router-dom';

import './global.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/Homepage';
import { Quiz } from './pages/Quiz/quiz';
import { Recipes } from './pages/Recipes/Recipes';
import { StepByStep } from './pages/StepByStep/Stepbystep';
import { Facts } from './pages/Facts/Facts';

const App = () => {
  return (
    <div className="page-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // výchozí stránka pro path "/"
        element: <HomePage />,
      },
      {
        path: 'facts',
        element: <Facts />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      { path: 'stepbystep', element: <StepByStep /> },
    ],
  },
]);

// render celé aplikace
createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />,
);
