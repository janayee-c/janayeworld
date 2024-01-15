import './styles/App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // ... other code

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
