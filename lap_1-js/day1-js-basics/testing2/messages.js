function psa(msg){
    let bannedWords = ["poop", "fart", "bum", "jquery"];

    for(let w of bannedWords){
        if(msg.toLowerCase().includes(w)) { throw Error("That's too rude for public consumption!")}
    }
    return `This is a Public Service Annoucment: ${msg}!`;
}

module.exports = { psa }
