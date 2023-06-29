useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // Specify how to clean up after the effect:
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})


/*
If our effect didn’t return a cleanup function, a new event listener would be added to the DOM’s document object every time that our component re-renders. Not only would this cause bugs, but it could cause our application performance to diminish and maybe even crash!

Because effects run after every render and not just once, React calls our cleanup function before each re-render and before unmounting to clean up each effect call.

If our effect returns a function, then the useEffect() Hook always treats that as the cleanup function. React will call this cleanup function before the component re-renders or unmounts. Since this cleanup function is optional, it is our responsibility to return a cleanup function from our effect when our effect code could create memory leaks. 

*/
// DEMO without (commented out) cleanup, note how increment 
/*
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    
    // return () => {
    //  document.removeEventListener("mousedown", increment);
    // };
    
  });
  const increment = () => {
    setClickCount((value) => value + 1);
  };

  return <h1>Document Clicks: {clickCount}</h1>;
}
*/
