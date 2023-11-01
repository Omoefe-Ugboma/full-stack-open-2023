 /*  1.3 Course Information, Step 3  */
/*const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };
  
  return (

      <div>
      <h1>{course}</h1>
          <p>{part1.name}: {part1.exercises}</p>
          <p>{part2.name}: {part2.exercises}</p>
          <p>{part3.name}: {part3.exercises}</p>
          <p>Exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
      </div>
  )
}*/

/*   1.4 Course Information, Step 4       */ 
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
};
export default App;