import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/maintenance" element={<Maintenance />} /> */}

          <Route path="/" element={<Home />} />
        </Route>

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;