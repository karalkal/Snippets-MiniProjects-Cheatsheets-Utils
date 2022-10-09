
Installation

    Clone or download the repo.
    Open terminal and navigate to server folder.
    Run npm install to install dependencies.
    Install nodemon as Dev Dependancy with npm i -D nodemon

Usage

    Run npm run dev to launch backend server.
    App can be used with live server or started locally.
    Upon clicking on the button it will:
      1. Generate a rendom number between 0 and 14
      2. Send a GET request to the backend with the random number as last segment of the url
      3. The backend will verify that the number is in the predefined range
      4. If the param is valid it will send an object with the relevant id to the client
      5. The client will format the "text" and "author" property values of the object 
      (so that the user doesn't get the impression we are shouting at them :-) )
      6. The client will then render a simple div displaying these values.

Bugs

    For some reason couldn't get fontawsome to display some visually appealing quotation marks around the text.

Wins

    Managed to gain deeper undestanding of how the FE and BE interract with one another.
    Found the experience of modifying and refactoring pre-written code really valuable as this resembles real-life working environment .

Challenges  

    Make fontawsome do its job!!!
