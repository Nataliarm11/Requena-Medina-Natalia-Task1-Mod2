

//ID DONDE DESEO COLOCAR EL CHEC Y CARTAS 
const checkbox = document.getElementById("checkbox")
console.log (document.getElementById("checkbox"))

//CARTAS PASADAS

const cartas = document.getElementById ( "cardsUpcoming")
const todosEvents = data.events
const eventosFuturos = todosEvents.filter ( events => events.date > data.currentDate)



//SEARCH 
const inputSearch = document.getElementById("search")


 // sacar solo las categorias y no repetir

 const category = eventosFuturos.map (events => events.category)
 const setCategory = new Set ( category ) 
 const arrayCategory = Array.from ( setCategory)
 console.log (arrayCategory)

 const funcionReduce = ( acumulador, elementoActual, indice, array ) => {
    return acumulador += `<div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="${elementoActual}-${indice}" value="${elementoActual}">
                            <label class="form-check-label" for="${elementoActual}-${indice}">${elementoActual}</label>
                            </div>`
  }


 const templateCheckbox = arrayCategory.reduce ( funcionReduce , '' )
 console.log ( templateCheckbox )

 //imprimir
 checkbox.innerHTML = ( templateCheckbox )



 //para las cartas 

 

 function template ( lista ) {
    return lista.reduce( ( acc, act ) => {
        console.log(act.category)
        return acc +=  `<article class="card col-6 col-md-5 col-lg-4 col-xl-2">
        <img src="${act.image}" class="card-img-top" alt="books">
        <div class="card-body">
          <h5 class="card-title text-dark text-body-emphasis">${act.name}</h5>
          <p class="card-text">date: ${act.date}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">price: ${act.price}</li>
          <li class="list-group-item">place: ${act.place}</li>
        </ul>
        <div class="card-body">
          <a href="./details.html?id=${act._id}" class="card-link">See More</a>
        </div>
      </article>`
    }, '' )
}

cartas.innerHTML = template (eventosFuturos)


// PONER EN FUNCIONAMIENTO LOS CHECKBOX



// search

inputSearch.addEventListener("input", () =>{
    console.log('data events: ', eventosFuturos)
    console.log('titulo a buscar: ', inputSearch.value)
   let arrayFilter = filterTittle(eventosFuturos,  inputSearch.value)
    cartas.innerHTML = template (arrayFilter, cartas)
  })

// PARA FILTRAR POR TITULO

function filterTittle(array, search) {
    return array.filter(val => val.name.toLowerCase().includes(search.toLowerCase()));  
}


//Checkbox

checkbox.addEventListener('change', () => {
    const checkboxChecked = Array.from (document.querySelectorAll( 'input[type="checkbox"]:checked')).map( check => check.value)
    const eventosFiltrados = filtrarEventos ( eventosFuturos , checkboxChecked)
    cartas.innerHTML= template (eventosFiltrados)
})



function filtrarEventos ( events, category ) {
    if (category.length == 0 ) {
        return eventosFuturos
    }
    return events.filter( events => category.includes (events.category))
}











