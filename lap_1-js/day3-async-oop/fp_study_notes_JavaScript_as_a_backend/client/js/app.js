// ********************************************
// SETUP
const msgBtn = document.querySelector('#msg-btn');
const getCatsBtn = document.querySelector('#getCatsBtn');
const getDogsBtn = document.querySelector('#getDogsBtn');
const getUnicornsBtn = document.querySelector('#getUnicornsBtn');

const form = document.querySelector('#new-cat-form');
const catsList = document.querySelector('ul');
const delBtn = document.querySelector('#delete-cats')

// Bind event listeners
msgBtn.addEventListener('click', getMessage);
getCatsBtn.addEventListener('click', getAllCats)
getDogsBtn.addEventListener('click', getAllDogs)
getUnicornsBtn.addEventListener('click', getAllUnicorns)
delBtn.addEventListener('click', deleteCats)

const rootUrl = 'http://localhost:3000/'

// Fetch all cats as soon as app is loaded
getAllCats();

// ********************************************

// CATS FLOW
function getAllCats() {
    fetch(rootUrl + 'cats')
        .then(r => r.json())
        .then(arr => appendEntries(arr))
        .catch(console.warn)
};

function getAllDogs() {
    fetch(rootUrl + 'dogs')
        .then(r => r.json())
        .then(appendEntries)
        .catch(console.warn)
};

function getAllUnicorns() {
    fetch(rootUrl + 'unicorns')
        .then(r => r.json())
        .then(appendEntries)
        .catch(console.warn)
};

function appendEntries(data) {
    catsList.innerHTML = "";
    let itemsArray = Object.values(data);
    let itemKey = Object.keys(data)[0]
    console.log(itemKey)

    for (let item of itemsArray[0]) {
        appendSingleLiItem(item)
    }
};

function appendSingleLiItem(itemData) {
    // console.log(itemData)
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${itemData.name} || Age: ${itemData.age}`
    catsList.append(newLi);
};

function deleteCats() {
    fetch('http://localhost:3000/cats', { method: 'DELETE' })
        .then(getAllCats)
        .catch(console.warn)
}

// ********************************************

// MESSAGE FLOW
function getMessage() {
    fetch('http://localhost:3000')
        .then(r => r.json())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(data) {
    const msg = document.createElement('p');
    msg.textContent = data.message;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************
