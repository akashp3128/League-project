// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SleepDataPage from './pages/SleepDataPage'; // Import the page you want to route to
import Navigation from './components/Navigation'; // Import the Navigation component
import Home from './pages/Home'; // Import the Home component


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/sleep-data" component={SleepDataPage} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
