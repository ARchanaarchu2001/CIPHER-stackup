import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className="sub-container">
        <div>
          <h1 style={{ textAlign: 'center' }}>CONTACT MANAGER</h1>
         <center> <button style={{ margin: '5px', padding: '10px',}}>
           <Link to="/SignUp" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
          </button>

          <button style={{ margin: '5px', padding: '10px' }}>
            <Link to="/Login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
          </button></center>
          
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
