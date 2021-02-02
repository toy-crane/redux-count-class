import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { doIncrease, doDecrease, changeDiff } from "./modules/counter";

const CounterContainer = () => {
	// const [number, setNumber] = useState(0);
	// const [diff, setDiff] = useState(1);
	// const [counter, setCounter] = useState({ number: 0, diff: 1 });
	// const { number, diff } = counter;
	const { diff, number } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const onIncrease = () => {
		dispatch(doIncrease());
	};

	const onDecrease = () => {
		dispatch(doDecrease());
	};

	const handleInput = (e) => {
		const diff = parseInt(e.target.value);
		dispatch(changeDiff(diff));
	};

	return (
		<Counter
			diff={diff}
			number={number}
			onDecrease={onDecrease}
			onIncrease={onIncrease}
			handleInput={handleInput}
		/>
	);
};

export default CounterContainer;
