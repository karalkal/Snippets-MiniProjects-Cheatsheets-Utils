### Study Notes
*Please note that the **key takeaway** from this session is that we can make frontend clients, we can make backend servers, they can live entirely separately and only communicate over HTTP requests. We are **not** expecting you to learn the specific syntax used in this demo's server application. Soon we will show you a lovely library that can help make it easier!*

[Javascript as a Backend](https://github.com/getfutureproof/fp_guides_wiki/wiki/JavaScript-as-a-Backend)

### Demo repo
To run the demo repo code
1. Fork and clone this repo
2. Change directory into the repo folder
      - `cd fp_study_notes_javascript_as_a_backend`
3. Start your server
      - `cd server`
      - `node index.js` or `npm start`
4. Open your client (in a new terminal!)
      - `cd ../client` 
      - `open index.html` or `http-server`

To run server tests
- `cd server`
- `npm install`
- `npm test`
  
# Entirely OPTIONAL Exercise!

1. **Create a node server** that can handle GET requests to three endpoints eg. eg. `/cats` `/dogs` `/unicorns`, returning a different set of data from each 
2. **Create a website** with three buttons
3. **Connect your front end and your backend** - each button should retrieve the data from a different endpoint and display it. Use `fetch` eg. `fetch('http://localhost:3000/cats)`. You will probably get 'CORS' errors here so check out the demo code for ideas on how to resolve that! _Hint: You'll need to set some **headers** for Access Control!_

_(Note that whilst you are welcome to deploy your client, the server is a bit trickier to deploy and we can't deploy it using eg. Netlify so don't worry about that for now! Do practice good workflow though, and make sure there are instructions in your README on how others can use your code!)_
