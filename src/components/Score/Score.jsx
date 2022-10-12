import React from 'react';

const Score = (props) => {
  return ( 
    <div id="studentScore">
    <h4>Score Information</h4>
    <h4>Score Date: {props.score.date}</h4>
    <h4>Score: {props.score.score}</h4>
    </div>
  );
}

export default Score;