import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation';

import Home from './routes/Home';
import Shop from './routes/Shop';
import Authentication from './routes/Authentication';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
