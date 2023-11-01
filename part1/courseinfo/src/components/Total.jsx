/*const Total = ({total}) => {
    return (
      <div>
        <p>{total}</p>
    </div>
    );
  };
  */
/*
  const Total = (props) => {
    const { parts } = props;
    const score = parts.reduce((total, item) => total + item.exercises, 0);
  
    return (
      <div>
        <p>Number of exercises: {score}</p>
      </div>
    );
  };*/

  // 1.5 Course Information, Step 5
  const Total = (props) => {
    var score = 0
    
    const lists = props.course.parts.map(function(item) {
      
      score = score + item.exercises
      
      return score
    })
    
    return (
      <div>
        <p>Number of exercises: {score}</p>
      </div>
    )
  };
  
export default Total;