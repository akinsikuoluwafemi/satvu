import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<p>Oops! Something went wrong</p>}>
        <Home />
      </ErrorBoundary>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
