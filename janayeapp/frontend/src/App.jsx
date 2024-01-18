import './styles/App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [backendData, setBackendData] = useState([{}]);


  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => {
      console.log(data);
      setBackendData(data);
    }).catch(error => console.log(error));
  }, []) 

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
