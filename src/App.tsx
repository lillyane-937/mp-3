import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Work from './Components/Work';
import Certifications from './Components/Certifications';
import Leadership from './Components/Leadership';
import Homepage from './Components/HomePage';




const Root: React.FC = () => {
  return (
    <>
      <Outlet /> {/* Renders the child routes (page content with individual headers) */}
    </>
  );
};



// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Root layout component
    children: [
      //pass on each individual webpage
      { path: '/', element: <Homepage /> }, 
      { path: 'Education', element: <Education /> },
      { path: 'Skills', element: <Skills /> },
      { path: 'Projects', element: <Projects /> },
      { path: 'Work', element: <Work /> },
      { path: 'Certifications', element: <Certifications /> },
      { path: 'Leadership', element: <Leadership /> },
    ],
  },
]);

// return App component with RouterProvider
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
