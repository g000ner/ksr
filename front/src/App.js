import React from 'react';
import Layout from './pages/layout';
import Start from './pages/startTest';
import Test from './pages/test'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return(
      <Router>
         <Routes>
          <Route exact path="/" element={<Layout />}/>
          <Route exact path="/startTest" element={<Start />}/>
          <Route exact path="/test" element={<Test />}/>
         </Routes>
      </Router>
  );
}

export default App;
