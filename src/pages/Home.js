import React from 'react';
import './styles.css'; // You can keep your custom styles here

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="container custom-text-color">
            <h1 className="text-center mt-4">Welcome to Sleeper Data App</h1>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container custom-text-color">
            <h1 className="text-center mt-4">Right Side Container</h1>
            <p>Content for the right side container goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
