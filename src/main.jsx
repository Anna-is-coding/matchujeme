import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './global.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/Homepage';
import { Quiz } from './pages/Quiz/quiz';
import { Recipes } from './pages/Recipes/recipes';
import { StepByStep } from './pages/StepByStep/stepbystep';
import { Facts } from './pages/Facts/Facts';

const App = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
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
      { path: 'recipes/:id', element: <Recipes /> }, 
      { path: 'stepbystep/:stepId', element: <StepByStep /> },
    ],
  },
]);

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />,
);