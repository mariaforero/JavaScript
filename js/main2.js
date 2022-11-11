if (typeof window === 'object') {
    window.addEventListener('DOMContentLoaded', function () {
        console.log('el dom')
        let formulario = document.querySelector('#formulario')




        formulario.addEventListener('submit', function (event) {

            event.preventDefault();

            let nombre = document.querySelector('#nombre').value
            let apellido = document.querySelector('#apellido').value
            let date = document.querySelector('#date').value
            let direccion = document.querySelector('#direccion').value
            let ciudad = document.querySelector('#ciudad').value
            let departamento = document.querySelector('#departamento').value
            let zipcode = document.querySelector('#zipcode').value
            let celular = document.querySelector('#celular').value



            /*
              console.log(nombre)
              console.log(apellido)
              console.log(date)
              console.log(direccion)
            */
            console.log('se ejecutan los datos')
            if (nombre && apellido && date && direccion && ciudad && departamento && zipcode && celular) {
                alert("los datos fueron ingresados")
            } else {
                alert("los datos deben ser ingresados")
            }

        })


    })
}

let fundadora = {
    name: 'maria',
    apellido: 'forero ',
    edad: 23
};

localStorage.setItem("fundadora", fundadora);
console.log(fundadora);


let owners = JSON.stringify(fundadora);
console.log(owners)




let fundadores =
    `[
        {
            "name": "Maria",
            "edad": 23,
            "rating": 4.3,
            "ciudad": "Colombia"
        },
        {
            "name": "Juliana",
            "edad": 25,
            "rating": 4.0,
            "ciudad": "Peru"

        },
        {
            "name": "Juan",
            "edad": 28,
            "rating": 3.8,
            "ciudad": "Uruguay"
        }
    ]`
console.log(JSON.parse(fundadores)[0].name)


function callvalue() {
    var name = document.getElementById("nombre").value;
    var last = document.getElementById("apellido").vaalue;
    var date = document.getElementById("date").value;
    document.writeln("your info: " + "tu nombre" + nombree);
    document.writeln(" tu apellido" + apellido);
    document.writeln("tu fecha de nacimiento" + date);
}


window.confirmation = function () {
    return Swal.fire({
        title: 'estas seguro?',
        text: "te vas a perder de estas promociones!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'estoy seguro!',
        reverseButtons: true
    }).then(result => result.isConfirmed);
};