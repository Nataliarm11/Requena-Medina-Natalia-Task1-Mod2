const checkbox = document.getElementById("checkbox")
console.log (document.getElementById("checkbox"))


const cartas = document.getElementById ( "cards")


const inputSearch = document.getElementById("search")


 //CHECBOX PARA NO REPETIR

 const category = data.events.map (events => events.category)
 const setCategory = new Set ( category ) 
 const arrayCategory = Array.from ( setCategory)



 //CHECBOX CATEGORY 

 const funcionReduce = ( acumulador, elementoActual, indice, array ) => {
    return acumulador += `<div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="${elementoActual}-${indice}" value="${elementoActual}">
                            <label class="form-check-label" for="${elementoActual}-${indice}">${elementoActual}</label>
                            </div>`
  }


 const templateCheckbox = arrayCategory.reduce ( funcionReduce , '' )

 

 //imprimir
 checkbox.innerHTML = ( templateCheckbox )



 //para las cartas 

 
 function template ( lista ) {
    return lista.reduce( ( acc, act ) => {
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
          <a href="./pages/details.html?id=${act._id}" class="card-link">See More</a>
        </div>
      </article>`
    }, '' ) //empiza string vacio
}

cartas.innerHTML = template (data.events)


// PONER EN FUNCIONAMIENTO LOS CHECKBOX


//Checkbox cuando el usuario realiza un check

//search

 inputSearch.addEventListener ( 'input', () => {
   const busqueda = filterTittle ( data.events, inputSearch.value)
   const inputs = document.querySelectorAll("input[type='checkbox']");
   const anyChecked = false
   for (let i = 0; i < inputs.length; i++) {   
    if(inputs[i].checked) {
      const porCategory = filtrarCategory (busqueda, inputs[i].value)
      cartas.innerHTML= template (porCategory , cartas)
      anyChecked = true
    }
  }   
  if(anyChecked == false) {
    cartas.innerHTML= template (busqueda , cartas)
  }   
 })

let checkboxElems = document.querySelectorAll("input[type='checkbox']");

for (let i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", (e) => {
    const busqueda = filterTittle ( data.events, inputSearch.value)
    if (e.target.checked) {
      const porCategory = filtrarCategory (busqueda, e.target.value)
      
      cartas.innerHTML= template (porCategory , cartas)
    } else {
      cartas.innerHTML= template (busqueda , cartas)
    }
  });
}

 function filtrarCategory ( filterData, search ) {
      if (filterData.length == 0 ) {
          return data.events
      }
      const filtered = filterData.filter((el) => el.category == search);
      return filtered
 }

  function filterTittle(array, search) {
   return array.filter(palabra => palabra.name.toLowerCase().includes(search.toLowerCase()));  
  }



































