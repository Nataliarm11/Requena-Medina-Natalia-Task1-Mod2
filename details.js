const section = document.getElementById('detail')

// console.log (location)

//CREO EL OBJETO Y LE PASO LOCATION.SEARCH, PORQUE EN ESTE ENCUENTRO EL ID
const params = new URLSearchParams(location.search)

// console.log (params.get ('id'))


//Guardo en una variable Y Enlazo con get la propiedad de un objeto (id) con una función que será llamada cuando la propiedad es buscada
//estoy guardando el id despues del =
const idParam =params.get('id')

console.log (idParam)

//Debo buscar  en el data los que cumplan con el id

const todosEvents = data.events

console.log (todosEvents)

//con el params voy a todosEvents y busco uno y comparo el id del evento con el id que llego del params si es cierto, lo guarda en const

const events = todosEvents.find ( events => events._id == idParam )

console.log (events)

//Estoy tomando el titulo del array para colocarlo en la pagina
document.title = events.name 



//CREO FUNCION PARA LOGRAR OBTENER EL ASSITANCE O EL ESTIMATE EN MIS CARTAS

  function definirFecha(evento, date){
     if (evento > date) {
        return `Estimate: ${events.estimate} ` 
     } return `Assistance: ${events.assistance}`
 }
 const asistEstimat = definirFecha (events.date, data.currentDate)

 console.log (asistEstimat)


//IMPRIMIENDO LAS CARTAS EN EL HTML
 section.innerHTML =`<article class="card col-5">
 <img src=" ${events.image} " class="card-img-top"></img>
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








