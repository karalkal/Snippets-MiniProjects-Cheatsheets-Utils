// How do each of these types of variable declarations behave with the if block?
// What if we just reassign them within the block?

function telescope(){
    var a = "near";
    let b = "near";
    const c = "near";
    d = "near";

    if (true){
        var a = "far";
        let b = "far";
        const c = "far";
        d = "far";
        // // Pause with this debugger and investigate the Sources > Scope panel
        // debugger;
    };

    console.log(`a is ${a}.`);
    console.log(`b is ${b}.`);
    console.log(`c is ${c}.`);
    console.log(`d is ${d}.`);
};

// telescope();