import {useState} from "react";

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return (
		<div>
			<h1>Please Kindly give us your feedback, Thank you!</h1>
			
			<br />
			
			<button onClick = {() => setGood(good + 1)}>Good</button>
			
			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
			
			<button onClick = {() => setBad(bad + 1)}>Bad</button>
			<br />
			<br />
			<h1>Statistics</h1>
			<br />
			<br />
			<h3>Good: {good}</h3>
			<h3>Neutral: {neutral}</h3>
			<h3>Bad: {bad}</h3>
		</div>
	)
}
export default App;