import React from 'react';
import Score from "../Score/Score";


const Student = (props) => {
  console.log(props.student.scores)
  return (  
    <>
    <div id="studentNameBio">
      <h2>Student Name: {props.student.name}</h2>
      <h4>Student's Bio: {props.student.bio}</h4>
      {props.student.scores.map((score, index) =>
        <Score 
          key={index} 
          score={score}/> 
      )}
    </div>
    </>
  );
}

export default Student;