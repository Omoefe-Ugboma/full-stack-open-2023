/*import Part from "./Part"
const Content = ({part1,part2,part3}) => {
    return (
      <div>
        <Part part1={part1}/>
        <Part part2={part2}/>
        <Part part3={part3}/>
    </div>
    );
  };
  */
 

  const Content = (props) => {
    const { parts } = props;
  
    return (
      <div>
        {parts.map((item, index) => (
          <div key={index}>
            <p>{item.name}: {item.exercises}</p>
          </div>
        ))}
      </div>
    );
  };
export default Content;