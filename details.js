const section = document.getElementById('detail')


let dataE;
let todosEvents;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then ( response => response.json ())
.then ( data => {
  dataE = data
  console.log(data)
  todosEvents = data.events
  console.log (todosEvents)



const params = new URLSearchParams (location.search)

const idparam = params.get ('id')

const events = todosEvents.find( events => events._id == idparam)

console.log (events)

document.title = `Details | ${events.name }`

function definirFecha(evento, date){
  if (evento > date) {
     return `Estimate: ${events.estimate} ` 
  } return `Assistance: ${events.assistance}`
}
const asistEstimat = definirFecha (events.date, data.currentDate)

console.log (asistEstimat)

section.innerHTML =`<article class="card col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4">
<img src=" ${events.image} " class="card-img-top object-fit-fill p-2"></img>
    <div class="card-body">
        <h5 class="card-title text-dark text-body-emphasis">${events.name}</h5>
        <p class="card-text"> ${events.category} </p>
        <p class="card-text"> ${events.description} </p>
        <p class="card-text">date: ${events.date} </p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: ${events.price} </li>
        <li class="list-group-item">Place: ${events.place} </li>
        <li class="list-group-item">Capacity: ${events.capacity} </li>
        <li class="list-group-item"> ${asistEstimat} </li>
    </ul>
 </article>`

  
})
.catch( error => console.log (error))
