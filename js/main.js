






let servicios = [
    { servicio: 'matrimonio', precio: 500.000, temporada: 'diciembre' },
    { servicio: 'graduacion', precio: 350.000, temporada: 'junio' },
    { servicio: 'cumpleaños', precio: 300.000, temporada: 'enero' },
    { servicio: 'compromiso', precio: 400.000, temporada: 'julio' },

]

const createTable = (clase, arr) => {

    // Tomamos donde vamos a insertar la info en el DOM
    let insertTableInDom = document.getElementById('InfoTable');

    // Creamos una etiqueta del titulo de la tabla
    let tableTitleCreateH3 = document.createElement('h3')

    // Le pasamos el ID
    tableTitleCreateH3.setAttribute('id', clase);
    // Creamos la tabla
    let createTable = document.createElement('table')
    let createTableHead = document.createElement('thead')
    let createTableBody = document.createElement('tbody')

    // Pasamos los atributos a la tabla
    createTable.setAttribute('class', 'table' + clase + 'mb-5')
    createTableHead.setAttribute('class', + clase)
    createTableBody.setAttribute('class', + clase)

    //// insertamos la tabla

    insertTableInDom.append(createTable)

    //// tomar la clase padre 
    let nodeParentTable = document.querySelector('.' + clase)
    nodeParentTable.before(tableTitleCreateH3)
    let infoTextTableTitleCreateH3 = document.getElementById(clase);

    infoTextTableTitleCreateH3.innerText = `Información de ` + clase

    ///// creamos la etiqueta

    let infoTable = document.createElement('p')
    // Insertamos la informacion dentro de p
    infoTable.innerText = `Primer producto ${arr[0].servicio} | Último producto ${arr[servicios.length - 1].servicio}`
    // Insertamos la informacion de bajada despues del titulo
    createTable.before(infoTable);

    // Juntamos las variables del encabezado de la tabla y el cuerpo de la tabla en un array
    let groupTable = [createTableHead, createTableBody]
    groupTable.forEach((element, index) => {
        element.setAttribute('class', `${clase}-${index}`);
        // insertamos los elementos en el DOM con append
        nodeParentTable.append(element);
    })

    // seleccionamos el encabezado y el cuerpo de la tabla
    let infoThead = document.querySelector(`.${clase}-0`)
    let infoTbody = document.querySelector(`.${clase}-1`)

    // Insertamos los nombres de las columnas
    infoThead.innerHTML = `<tr>
                <th scope="col">#</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Temporada</th>
    </tr>`
    arr.forEach((element, index) => {
        infoTbody.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${element.servicio}</td>
            <td>${element.precio}</td>
            <td>${element.temporada}</td>
        </tr>`
    })

}

createTable('servicios', servicios)




if (typeof window === 'object') {
    window.addEventListener('DOMContentLoaded', function () {
        console.log('el dom')
        let nav = document.querySelector('.navegacion')


        nav.addEventListener('mouseover', (e) => {
            nav.style.background = '#251B37 '
        })

        nav.addEventListener('mouseout', (e) => {
            nav.style.background = 'transparent '
        })
    })
}






