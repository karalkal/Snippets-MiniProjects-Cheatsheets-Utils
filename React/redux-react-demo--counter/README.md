Redux uses a special object called the store.   
The store acts as a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched.   
In nearly every Redux application, there will only be one store.
### Data flow:

1. The store initializes the state with a default value.
2. The view displays that state.
3. When a user interacts with the view, like clicking a button, an action is dispatched to the store.
4. The dispatched action and the current state are combined in the store’s reducer to determine the next state.
5. The view is updated to display the new state.


- Create a Redux store
- Render the initial state of the application.
- Subscribe to updates. Inside the subscription callback:
        Get the current store state  
        Select the data needed by this piece of UI  
        Update the UI with the data  
 - Respond to UI events by dispatching Redux actions