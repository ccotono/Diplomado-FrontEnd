//el script se puede integrar en el head o al final del body (lo mas recomendable es colocarlo al final del body si es que el documento crece mucho para que no demore la carga de la pagina).

//alert("Hola Mundooo") - enfoque antiguo



window.addEventListener('DOMContentLoaded', (e) => { //todo el codigo va dentro de este evento principal

    //con este evento (DOMContentLoaded) me aseguro que todas las etiquetas HTML fueron cargadas y procesadas por el buscador, mas info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");


    console.log("Hola Mundooo"); //HOLA MUNDO enfoque moderno, se ve en la consola al inspeccionar la pagina


    //Sintaxis de variable:
    //let nombreVariable = valor; - ej: let nombre = "Benjamin" - let edad = 21


    //FUNCION getElementById()------------------------------------------------

    //recuperar los valores del fromulario
    let boton = document.getElementById("btn-suscribir"); //definimos el boton por la id que tenga en el HTML
    boton.addEventListener("click", (ev) => { //cuando se haga click en el boton (evento click) pasa lo de abajo

        let nombre = document.getElementById("nombre").value; //getelementbyId= obtener elemento por id desde el HTML, en este caso la id es nombre
        //console.log("El nombre del suscriptor es: " + nombre); //mostrar el nombre del suscriptor

        let correo = document.getElementById("correo").value;  //lo mismo pero con el correo
        //console.log("El correo del suscriptor es: " + correo)

        let genero = getGenero();//genero es igual a la funcion que se crea mas abajo

        let intereses = getIntereses();//funcion gerIntereses

        let suscriptor = { //JSON O JAVA SCRIPT OBJECT NOTATION = Como se escribe un objeto en js (objeto seria el conjunto de variables bajo un contexto, en este caso los datos del suscriptor)
            nombre,
            Email: correo, //esta syntaxis se ocupa cuando la variable no tenga el nombre que se desea mostrar
            genero, //constante que muestra el input seleccionado
            intereses,
            fecha_registro: (new Date()).toISOString()//instancia para registrar fechas //toISOString devuelve objetos/valores como string
        };
        console.dir(suscriptor); //se crea objeto que contenga los valores especificados, es una forma de agrupar los datos
        guardarSuscriptor(suscriptor); //funcion que guarda el objeto suscriptor y sus datos

    });

});


//Se crea funcion para recuperar el valor del radio (genero)
function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked") //nos muestra el input que contenga "input[name='genero']", se puede usar esta syntaxis de css en js
    // checked (syntaxis de css) es un atributo boleano, por ende nos devolvera el input que se encuentre seleccionado
    if (inputSeleccionado == null) { //si no se seleccion un genero (input)
        mostrarError("Debe seleccionar un genero"); //se muestra el error 
        return false //si hay un error se nos mostrara false en vez de el valor de genero en el JSON (suscriptor), en vez de usar un else ponemos un return para cortar la funcion
    }
    const genero = inputSeleccionado.value; //la constante genero sera igual al input seleccionado (M o F)
    return genero; // nos muestra el valor de genero (M o F)

}

//se crea la funcion de mensaDeError por si el valor es nulo, en este caso si es que no se selecciona un genero
function mostrarError(mensajeDeError) {
    console.error(mensajeDeError);

}

//FUNCION Document.querySelector() y Document.querySelectorAll()----------------------------------------
//devuelve el primer y todos (All) los elementos que coincidan con los selectores especificados

function getIntereses() {
    let inputIntereses = document.querySelectorAll("input[name='intereses']:checked"); //nos devuele un objeto nodeList, pero en la bd no se guardan inputs, queremos el valor de este (sigue abajo)
    let arrIntereses = []; //para esto se crea un arreglo que contenga los input que seleccionemos
    inputIntereses.forEach(nodoInteres => arrIntereses.push(nodoInteres.value)); //recorre los nodos html y extrae los strings con los valores que necesitamos 
    //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    //la funcion (=>) nodoInteres hace que el nodoInteres  agregue el valor de inputIntereses (el valor o los valores que se seleccionen en el input) al arreglo, ver consola de la pagina para entender mejor
     if (inputIntereses.length <= 1) {// el atributo length demarca una cantidad, si la cantidad de inputIntereses es menor a 1
        mostrarError("Debe seleccionar al menos 2 temas de su interes");
        return false;

    }
    return arrIntereses;
}

//creamos la funcion para guardar el objeto json en firebase.google.com usando la api fetch --> https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch -----> https://developer.mozilla.org/es/docs/Web/API/Fetch_API

function guardarSuscriptor(suscriptor) {
    const url = "https://sesiones-602a7-default-rtdb.firebaseio.com/suscriptores.json" //se crea la constante url en la que se guardaran los datos
    fetch(url, {
        method: "POST", //metodo de peticion HTTP que se usará --> https://developer.mozilla.org/es/docs/Web/HTTP/Methods
        body: JSON.stringify(suscriptor) //convierte el JSON en un string para enviarlo a donde se guardaran los datos
    });
}




//GLOSARIO:

//CLASE: PLANTILLA PARA LA CREACIÓN DE OBJETOS

//INSTANCIA: OBJETO QUE SE GENERA DESDE UNA PLANTILLA (CLASE) CON VALORES DISTINTOS


//=> es una alternativa compacta a function ej:
/*  EN VEZ DE  
     
function (a){
  return a + 100;
 }

 USAMOS

(a) => {
  return a + 100;
}     */

//NODO: https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/



//FUNCIONES: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions



