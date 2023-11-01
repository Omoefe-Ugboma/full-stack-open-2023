/*const Total = ({total}) => {
    return (
      <div>
        <p>{total}</p>
    </div>
    );
  };
  */

  const Total = (props) => {
    const { parts } = props;
    const score = parts.reduce((total, item) => total + item.exercises, 0);
  
    return (
      <div>
        <p>Number of exercises: {score}</p>
      </div>
    );
  };
  
export default Total;