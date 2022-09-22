// What do we have access to from within the outerCircle?
// What about the innerCircle?
// What about outside all of them?
// Does it change between using var/let/const?

let intro = "Hello!";

function outerCircle(){
    let message = "You have access to the outer circle!";
    console.log("\n**********************************\nYou have entered the outer circle!\n**********************************");
    // console.log(intro);
    // console.log(message);
    // console.log(secretMessage);
    
    function innerCircle(){
        let secretMessage = "You have access to the inner circle!";
        let intro = "Inner intro";
        console.log("\n\t>> **********************************\n\t>> You have entered the inner circle!\n\t>> **********************************");
        // console.log(`\t>> ${intro}`);
        // console.log(`\t>> ${message}`);
        // console.log(`\t>> ${secretMessage}`);
        // console.log("\t>> Exiting the inner circle!\n\t>> *************************");

    }
    // innerCircle();
    console.log("\nExiting the outer circle!\n*************************\n");
};


// outerCircle();

// console.log(intro);
// console.log(message);
// console.log(secretMessage);
