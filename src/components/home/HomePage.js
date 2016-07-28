import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>BlackBoard Application</h1>
        <p>Using React, Redux and React ROuter in ES6. </p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
