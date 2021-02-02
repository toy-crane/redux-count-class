// presentational Component
const Counter = (props) => (
	<div>
		<h1>{props.number}</h1>
		<input value={props.diff} onChange={props.handleInput}></input>
		<button onClick={props.onIncrease}>+</button>
		<button onClick={props.onDecrease}>-</button>
	</div>
);

export default Counter;
