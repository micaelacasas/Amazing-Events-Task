{/* <div class="card card-container">
<img src="./assets/images/Feria.jpg" class="card-index" alt="Feria">
<div class="card-body">
    <h5 class="card-title">Festival of the collectivities</h5>
    <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the whole family.</p>
    <a href="./assets/pages/details.html" class="btn btn-primary">See more</a>
</div>
</div> */}
/* console.log(data.events[0]) */
section = document.getElementById("id-cards")
/* console.log(section) */

function cardTemplate(evento){
    return `<div class="card card-container">
    <img src="${evento.image}" class="card-index" alt="Feria">
    <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <a href="./assets/pages/details.html" class="btn btn-primary">See more</a>
    </div>
    </div>`
}

const pastEvents = data.events.filter(events => events.date < data.currentDate)

function createTemplate(pastEvents, infoTemplate){
    infoTemplate.innerHTML = ""
    let template = ""
    pastEvents.forEach(evento => template += cardTemplate(evento)) 
    infoTemplate.innerHTML = template
}

createTemplate(pastEvents, section)