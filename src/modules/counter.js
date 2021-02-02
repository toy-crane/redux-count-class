// {'address': '송파구'}
// const modifyAddress = (people) => {
// 	people.address = "강남구";
// 	const newPeople = { ...people, address: "강남구" };
// 	return newPeople;
// };
// {'type': 'modifyAddress', 'payload': {'address': '강남구'}}
// const Modifypeople = (people, action) => {
// 	switch (action.type) {
// 		case "modifyAddress":
// 			return { ...people, address: action.payload.address };
// 		case "deleteAddress":
// 			return { ...people, address: null };
// 		default:
// 			return people;
// 	}
// };
const initialState = { number: 0, diff: 1 };
// Action Increase 객체는 {'type': 'increase'}
// Action Decrease 객체는 {'type': 'decrase'}
// Action diff의 객체는 {'type': 'diff', 'diff': 3}
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "increase":
			return { ...state, number: state.number + state.diff };
		case "decrease":
			return { ...state, number: state.number - state.diff };
		case "diff":
			return { ...state, diff: action.diff };
		default:
			return state;
	}
};

// Action Creator
const doIncrease = () => ({ type: "COUNTER/increase" });
const doDecrease = () => ({ type: "COUNTER/decrease" });
const changeDiff = (diff) => ({ type: "diff", diff: diff });

export { counterReducer, doIncrease, doDecrease, changeDiff };
