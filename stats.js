const tables = document.getElementById ('sectionTables')

// console.log (tables)


let dataE;
let todosEvents;
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then ( response => response.json ())
.then ( data => {
  dataE = data
  todosEvents=data.events
  console.log (dataE)
  console.log(todosEvents)

//Eventos pasados

const eventsPast = todosEvents.filter (event => event.date <= dataE.currentDate)

// console.log (eventsPast)

//Eventos futuros

const eventsUpcoming = todosEvents.filter (event => event.date >= dataE.currentDate)

// console.log (eventsUpcoming)


//Array con eventos pasados para sacar las categorias

const categoryPast = Array.from  ( new Set (eventsPast.map ((event) => event.category) ))

// console.log (categoryPast)

// Array con eventos futuros para sacar las categorias

const categoryUpcoming = Array.from ( new Set ( eventsUpcoming.map (( event) => event.category)))

// console.log (categoryUpcoming)



//Evento con mayor porcentaje de asistencia - Events with the highest percentage of attendance (funcion)

function mayorAsistencia ( events ) {
  let porcentaje = 0;
  let nombre = " ";
  events.forEach ( ( event) => {
    let valor = ( event.assistance / event.capacity ) * 100;

    if (valor > porcentaje) {
      porcentaje = valor;
      nombre = event.name;
      
    }
    
  })
  return ` ${nombre} , ${porcentaje.toFixed(2)}%`;
}


// Evento con menor porcentaje de asistencia - Events with the lowest percentage of attendance ( funcion)

function menorAsistencia ( events ) {
  let porcentaje = 100;
  let nombre = " ";
  events.forEach ( ( event) => {
    let valor = ( event.assistance / event.capacity ) * 100;

    if (valor < porcentaje) {
      porcentaje = valor;
      nombre = event.name;
      
    }
    
  })
  return ` ${nombre} , ${porcentaje.toFixed(2)}%`;
}



// Evento con mayor capacidad - Event with larger capacity (funcion)

function mayorCapacidad (events) {
  let porcentaje = 0;
  let nombre = " ";
  events.forEach ( ( event ) => {
    if (event.capacity > porcentaje ) {
      porcentaje = event.capacity;
      nombre = event.name;
      
    }
  })
  return ` ${nombre} , ${porcentaje}`;
}

/////////////////////////////// SEGUNDA PARTE ////////////////////////////////////////////////////////////////

//CREAR TABLA EVENT STATICS

let tableOne = document.createElement ('table')
tableOne.className = "inf1 m-1"
tableOne.innerHTML = `<caption class="event1 text-center caption-top"><strong>Event statistics</strong></caption>
<thead>
  <tr>
    <th>Events with the highest percentage of attendance</th>
    <th>Events with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
  </tr>
</thead>
<tbody>
    <tr>
        <td> ${mayorAsistencia(eventsPast)} </td>
        <td> ${menorAsistencia(eventsPast)} </td>
        <td> ${mayorCapacidad(eventsPast)} </td>
    </tr>
</tbody>`



//////////////////////////// TERCERA PARTE UPCOMING //////////////////////////////////////////////////////////

//Funciones para sacar los datos necesarios y armar la tabla Upcoming events statistics by category

function infoTableUpcomingEvents(categorias, events) {
  // Array para almacenar el resultado
  let resultado = [];

  console.log(resultado);

  // Iterar por cada categoría
  categorias.map((category) => {
    // Filtrar eventos por categoría
    let categoriaEvents = events.filter((event) => category == event.category);
    console.log(categoriaEvents);

    // Calcular los ingresos totales
    let revenues = calculateRevenues(categoriaEvents);
    console.log(revenues);

    // Calcular el porcentaje de asistencia promedio
    let attendance = calculateAttendance(categoriaEvents);
    console.log(attendance);

    // Agregar los resultados al array resultado
    resultado.push({
      category,
      revenues,
      attendance: attendance / categoriaEvents.length,
    });
  });

  return resultado;
}

// Función para calcular los ingresos totales
function calculateRevenues(events) {
  let total = 0;
  events.forEach((event) => {
    total += event.price * (event.estimate || event.assistance);
  });
  return total;
}

// Función para calcular el porcentaje de asistencia promedio
function calculateAttendance(events) {
  let totalAttendance = 0;
  events.forEach((event) => {
    totalAttendance += ((event.assistance || event.estimate) / event.capacity) * 100;
  });
  return totalAttendance;
}


const infoTableUpcomingEventsConst = infoTableUpcomingEvents (categoryUpcoming, eventsUpcoming); 


//Tabla Upcoming - Upcoming events statistics by category

let tableTwo = document.createElement('table');
let tBody= document.createElement('tbody');
tableTwo.className = "inf2 m-1";
tableTwo.innerHTML = `<caption class="event1 text-center caption-top"><strong>Upcoming events statistics by category</strong></caption>
<thead>
  <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Percentage of attendance</th>
  </tr>
</thead>`;

infoTableUpcomingEventsConst.forEach((eventos) => {
  let crearTr = document.createElement('tr');
  crearTr.innerHTML = `<td>${eventos.category}</td>
  <td> $ ${eventos.revenues.toLocaleString()}</td>
  <td>${eventos.attendance.toFixed(2)} %</td>`;
  tBody.appendChild(crearTr);
});

tableTwo.appendChild(tBody);


/////////////////////////////// CUARTA PARTE  PAST EVENTS ////////////////////////////////////////////////////


// Funciones para sacar los datos necesarios y armar la tabla Past events statistics by category

function infoTablePastEvents(categorias, events) {

  let resultado = [];

  console.log(resultado);

  // Iterar por cada categoría
  categorias.map((category) => {
    // Filtrar eventos por categoría
    let categoriaEvents = events.filter((event) => category == event.category);
    console.log(categoriaEvents);

    // Calcular los ingresos totales
    let revenues = calculateRevenues(categoriaEvents);
    console.log(revenues);

    // Calcular el porcentaje de asistencia promedio
    let attendance = calculateAttendance(categoriaEvents);
    console.log(attendance);

    // Agregar los resultados al array resultado
    resultado.push({
      category,
      revenues,
      attendance: attendance / categoriaEvents.length,
    });
  });

  return resultado;
}

// Función para calcular los ingresos totales
function calculateRevenues(events) {
  let total = 0;
  events.forEach((event) => {
    total += event.price * (event.estimate || event.assistance);
  });
  return total;
}

// Función para calcular el porcentaje de asistencia promedio
function calculateAttendance(events) {
  let totalAttendance = 0;
  events.forEach((event) => {
    totalAttendance += ((event.assistance || event.estimate) / event.capacity) * 100;
  });
  return totalAttendance;
}


const infoTablePastEventsConst = infoTablePastEvents (categoryPast, eventsPast); 


//Tabla Upcoming - Upcoming events statistics by category

let tableThree = document.createElement('table');
let tBodyThree = document.createElement('tbody');
tableThree.className = "inf2 m-1";
tableThree.innerHTML = `<caption class="event1 text-center caption-top"><strong>Upcoming events statistics by category</strong></caption>
<thead>
  <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Percentage of attendance</th>
  </tr>
</thead>`;

infoTablePastEventsConst.forEach((eventos) => {
  let crearTr = document.createElement('tr');
  crearTr.innerHTML = `<td>${eventos.category}</td>
  <td> $ ${eventos.revenues.toLocaleString()}</td>
  <td>${eventos.attendance.toFixed(2)} %</td>`;
  tBodyThree.appendChild(crearTr);
});

tableThree.appendChild(tBodyThree);


 //Imprimir tablas

tables.append (tableOne, tableTwo, tableThree)




})
.catch( error => console.log (error))