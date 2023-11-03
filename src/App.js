// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SleepDataPage from './pages/SleepDataPage'; // Import the page you want to route to
import Navigation from './components/Navigation'; // Import the Navigation component
import Test from './pages/Test'
import Home from './pages/Home'; // Import the Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import './globalStyles.css'; // Import the global CSS file


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sleep-data" element={<SleepDataPage />} />
        <Route path="/test" element={<Test />} />

        {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
