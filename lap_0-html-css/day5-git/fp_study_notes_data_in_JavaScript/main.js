const catName = "Zelda";
let catLocation = "London";

function takeMeHome(){
    catLocation = "Cornwall";
    return catLocation;
};

function rename(newName){
    catName = newName;
};

module.exports = {
    catName, catLocation, takeMeHome, rename
}
