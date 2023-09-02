import { createStore } from "redux";


// Reducer / Store
const initialState = 0;
export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

export const store = createStore(countReducer);