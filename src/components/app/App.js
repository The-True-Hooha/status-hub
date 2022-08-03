import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../routes/HomePage';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
