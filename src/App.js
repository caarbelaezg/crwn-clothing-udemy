import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation';

import Home from './routes/Home';
import Authentication from './routes/Authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='authentication' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
