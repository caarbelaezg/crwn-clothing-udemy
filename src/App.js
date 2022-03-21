import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation';

import Home from './routes/Home';
import SingIn from './routes/SingIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sing-in' element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;
