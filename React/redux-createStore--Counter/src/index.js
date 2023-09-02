import { store } from "./store";
import "./index.css"

// Action Creators - just return pre-defined action when function is triggered, can also use:
// const increment = () =>({ type: "increment" });
function increment() {
  return { type: "increment" };
}

function decrement() {
  return { type: "decrement" };
}


// HTML Elements
const counterElement = document.getElementById("counter");
const incrementer = document.getElementById("incrementer");
const decrementer = document.getElementById("decrementer");
counterElement.innerHTML = "New text to display";
// replace text...
// Store State Change Listener
const render = () => {
  counterElement.innerHTML = store.getState();
};
store.subscribe(render)
render();
// ... replace text but now track state

// DOM Event Handlers
const incrementerClicked = () => {
  store.dispatch(increment());
};
incrementer.addEventListener("click", incrementerClicked);

const decrementerClicked = () => {
  store.dispatch(decrement());
};
decrementer.addEventListener("click", decrementerClicked);
