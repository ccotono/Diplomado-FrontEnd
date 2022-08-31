//se puede integrar en el head o al final del body (lo mas recomendable es colocarlo al final del body si es que el documento crece mucho para que no demore la carga de la pagina).

//alert("Hola Mundooo") - enfoque antiguo



window.addEventListener('DOMContentLoaded', (e) => { //todo el codigo va dentro de este evento principal

    //con este evento (DOMContentLoaded) me aseguro que todas las etiquetas HTML fueron cargadas y procesadas por el buscador, mas info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");

    //Sintaxis de variable:
    //let nombreVariable = valor; ----- ej: let nombre = "Benjamin" - let edad = 21


    //recuperar los valores del fromulario
    let boton = document.getElementById("btn-suscribir"); //definimos el boton por su id en el HTML
    boton.addEventListener("click", (ev) => { //cuando se haga click en el boton (evento click) pasa lo de abajo

        let nombre = document.getElementById("nombre").value; //getelementbyId= obtener elemento por id desde el HTML, en este caso la id es nombre
        console.log("El nombre del suscriptor es: " + nombre); //mostrar el nombre del suscriptor

        let correo = document.getElementById("correo").value;  //lo mismos pero con el correo
        console.log("El correo del suscriptor es: " + correo)

    }); 


});


console.log("Hola Mundooo"); //enfoque moderno, se ve en la consola al inspeccionar la pagina



