import './styles/App.css';
import React, {useEffect, useState} from 'react';
import { Homepage, Background, Currents } from './pages/export'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(response => response.json()).then(data => {
      console.log(data);
      setBackendData(data);
    }).catch(error => console.log("failed to load due to : " + error));
  }, []) 

  return (
    <BrowserRouter>
      <Routes>
      <Route index element = {<Homepage />} />
      <Route path="/animal_information" element={<Background />} />
      <Route path="/sponsors" element={<Currents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
