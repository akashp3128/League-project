import React from 'react';
import './styles.css'; // You can keep your custom styles here

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="container custom-text-color">
            <h1 className="text-center mt-4">FarmHood Power Rankings</h1>
            <p>Power rankings chart here</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container custom-text-color">
            <h1 className="text-center mt-4">Week current.week matchups</h1>
            <p>weekly mathchups info here, create stack?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
