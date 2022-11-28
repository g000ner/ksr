import React from 'react';
import Layout from './pages/layout';
// import Event from './pages/event';
// import EventReg from './pages/eventReg';
// import EventRegOrg from './pages/eventRegOrg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return(
      <Router>
         <Routes>
          <Route exact path="/" element={<Layout />}/>
          {/* <Route path="/event" element={<Event /> }/>
          <Route path="/eventReg" element={<EventReg /> }/>
          <Route path="/eventRegOrg" element={<EventRegOrg /> }/> */}
         </Routes>
      </Router>
  );
}

export default App;
