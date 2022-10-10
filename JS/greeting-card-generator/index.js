const secondSection = document.querySelector('section#second')
const form = document.querySelector('form')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    const greeting = form.greeting.value
    const occasion = form.occasion.value
    const message = form.message.value

    if (greeting && occasion && message) {
        secondSection.innerHTML = ''
        displayCard(greeting, occasion, message)
    }
}


function displayCard(greeting, occasion, message) {
    secondSection.innerHTML = `
    <h2> Card </h2>
    <div id="second_sec">
    <img class="card-img-top" src="./flower-color.jpg" alt="a card" style="width:100%">
        <div class="centered">
        <h4><b>Dear ${greeting}, </b></h4>
        <p>Happy ${occasion}!</p>
        <p>${message}</p>
        </div>
    </div>
    `
}


