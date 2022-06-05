import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Fragment>
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={<Navigate to='/about' replace />}
        />

        <Route
          path='*'
          element={<Navigate to='/not-found' replace />}
        />

        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
