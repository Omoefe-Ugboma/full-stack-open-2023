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
 
// // 1.4 Course Information, Step 4
 /* const Content = (props) => {
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
  };*/
// 1.5 Course Information, Step 5


const Content = (props) => {
	const lists = props.course.parts.map(function(item, index) {
		return (
			<div key={index}>
				<p>{item.name}: {item.exercises}</p>
			</div>
		)
	})
	
	return lists
};

export default Content;