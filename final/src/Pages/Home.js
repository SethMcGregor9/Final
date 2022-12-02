import React from "react";
import Carosle from './carosle.js'



function Home() {
    return <div className="form">
        <h1>Custom Homes</h1>
        <Carosle />
        <h3>Welcome to Custom Homes a place to create the perfect floor plan! 
          Please login to better your experience </h3>

        <br></br>

    <form >
      <h3  className="title">Login</h3>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
       
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
    </div>

}

export default Home;