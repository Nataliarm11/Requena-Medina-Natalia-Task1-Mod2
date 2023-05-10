let cartas = document.getElementById ( "cardsPast")

function infoDeCartas(object){
    return `<article class="card col-10 col-sm-7 col-md-5 col-lg-4 col-xl-2">
    <img src=" ${object.image} " class="card-img-top"></img>
        <div class="card-body">
            <h5 class="card-title text-dark text-body-emphasis">${object.name} </h5>
            <p class="card-text">date: ${object.date} </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">price: ${object.price} </li>
            <li class="list-group-item">place: ${object.place} </li>
            </ul>
            <div class="card-body">
                <a href="./details.html" class="card-link">See More</a>
                </div>
            </article>`
}

function filter (eventsDate, date) {
  const filtro = [ ];
  for (let elemento of eventsDate) {
    if (elemento.date <= date) {
      filtro.push(elemento)
    }
  }
  return filtro
}


let filtro = filter(data.events, data.currentDate);


function verCartas (array, parte){
    let template = " "
    for (let element of array ){
         template += infoDeCartas (element)
    }
    parte.innerHTML += template
}

verCartas (filtro, cartas)
