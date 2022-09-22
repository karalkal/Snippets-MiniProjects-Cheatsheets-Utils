const section = document.querySelector('section')
const form = document.querySelector('form')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    const greeting = form.greeting.value
    const occasion = form.occasion.value
    const message = form.message.value
    displayCard(greeting, occasion, message)

}

function displayCard(greeting, occasion, message) {
    section.innerHTML = `<h2> Card </h2>
    <div class="card">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/692/571/small/valentines-day-rose-background-with-white-blank-card.jpg" alt="a card" style="width:100%">
    <div class="container">
    <h4><b>${greeting}</b></h4>
    <p>${occasion}</p>
    </div>${message} </div>`

}
