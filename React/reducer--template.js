/*
// EXAMPLE 1

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
};

const wagonReducer = (state = initialWagonState, action) => {

    switch (action.type) {
        case "gather":
            console.log("gather")
            return {
                ...state,
                supplies: state.supplies + 15,
                days: state.days + 1,
            };
        // If there are not sufficient supplies to travel the given number of days, return the current state.
        case "travel":
            if (state.supplies - 20 * action.payload < 0) {
                console.log("No enough supplies!")
                return state;
            }

            console.log("travel")
            return {
                ...state,
                supplies: state.supplies - 20 * action.payload,
                distance: state.distance + 10 * action.payload,
                days: state.days + action.payload,
            };

        case "tippedWagon":
            console.log("tipped")
            return {
                ...state,
                supplies: state.supplies - 30,
                days: state.days + 1,
            }
        default:
            return state;
    }
};


let wagonState = wagonReducer(undefined, {});
console.log(wagonState);

wagonState = wagonReducer(wagonState, { type: "travel", payload: 1 });
console.log(wagonState);

wagonState = wagonReducer(wagonState, { type: "gather" });
console.log(wagonState);

wagonState = wagonReducer(wagonState, { type: "tippedWagon" });
console.log(wagonState);

wagonState = wagonReducer(wagonState, { type: "travel", payload: 4 });
console.log(wagonState);

wagonState = wagonReducer(wagonState, { type: "travel", payload: 3 });
console.log(wagonState);
*/

// EXAMPLE 2

const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

const addTodo = text => ({
    type: ADD_TODO,
    payload: { text, id: nanoid() }
})

const todoToggled = id => ({
    type: TODO_TOGGLED,
    payload: { id }
})

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        case TODO_TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload.id) return todo

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

let toDos = todosReducer(undefined, {})
console.log(toDos)

toDos = todosReducer(toDos, { type: ADD_TODO, payload: { id: 1, text: "eat", completed: false } })
console.log(toDos)

toDos = todosReducer(toDos, { type: ADD_TODO, payload: { id: 2, text: "sleep", completed: false } })
console.log(toDos)

