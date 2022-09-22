### Study Notes
[Data in JavaScript](https://github.com/getfutureproof/fp_guides_wiki/wiki/Data-in-JavaScript)

# Exercises
*Try the first four sets of exercises in your browser console (right click and choose 'inspect')*

1. **Create the following variables**, thinking about the variable name, and the type of data you expect to be stored in it. Is it likely to change?:
    - Has someone had coffee today or not?
    - How many coffee’s have been had today.
    - If someone likes coffee or not.
    - A person’s favourite drink
    - The place where the person can buy that drink.
    - A list of other beverages someone likes to drink.
    - A list of other information about their favourite drink including name, the average price, if it is healthy or not, nutritional information, how frequently it should be drunk, if there are variations of the drink and what those are, an emoji to represent the drink, a list of people who might like to meet to have the beverage.

2. **Experiment with accessing** those pieces of information.

3. **Determine what type of data** all of these are:
```js 
1

“90”

1-234-233-422

“Hello”

Hello

[3, 4, 6, 9]

[1, [a, b, c], 45]

{ name: ‘Alan’, occupation: ‘programmer’}
```

4. Try to **anticipate the outcome** of these operations and then test in the console.
```js
let x = 1;
x = -x;
```
```js
"my" + "string"
```
```js
"my" + string
```
```js
my + string
```
```js
my + “string”
```
```js
5 + "3"
```
```js
"4" + 43
```
```js
2 + 2 + '1'
```
```js
5 % 2
```
```js
2 ** 3
```
```js
let counter = 2;
counter++;
```


5. **Pass the Tests!**
- Fork and clone this repo
- cd into the repo folder with `cd fp_study_notes_data_in_JavaScript`
- Install dependencies with `npm install`
- Run the test suite with `npm test`
- Make changes to `main.js` until all tests are passing
- *BONUS: Add more tests!*
