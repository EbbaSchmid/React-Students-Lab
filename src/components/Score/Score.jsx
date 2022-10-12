const Score = (props) => {
  return ( 
    <div>
    <h4>Score Component</h4>
    <h4>{props.score.date}</h4>
    <h4>{props.score.score}</h4>
    </div>
  );
}

export default Score;