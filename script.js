
function agregarTarea(){
    //Obtenemos el valor del campo de la tarea. 
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value; //value para obtener el valor porque no quiero el input, quiero lo que se escribe dentro. 

    //confirmar si el campo esta vacio o no. 
    if(nuevaTareaTexto === ""){
        alert("Por favor, Ingrese una tarea");
        return; // para que siga ejecutando. 
    }

    //Crear elemento en la lista si no está vacio. 
    //1. crear los items en html, crear la etiqueta desde el dom. 
    let nuevaTarea = document.createElement("li");
    //2. Agregar el valor que quiero que tenga ese li. 

    nuevaTarea.textContent = nuevaTareaTexto + " "; //espacio para el boton para eliminar. 

    //3. Agregar el botón de eliminar la tarea. 
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("buton-eliminar");
    // Agregar el botón de eliminar al contenedor
    document.getElementById("botonesContainer").appendChild(botonEliminar);
    //Agregar la funcionalidad. Al hacer click se ejecute una subfuncion. La funcion de elimnar el valor. 
    botonEliminar.onclick = function (){
        nuevaTarea.remove();
    }

    //Asociar el boton con la tarea. 
    //el método appenChild, toma al elemento que yo le paso como padre y me permite agregarle hijos. Para relacionarlos. 
    //El padre, la lista. El hijo, el botón.
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento, la tarea a la lista. 
    //Primero recojo esa lista. Luego le asocio que los "li" que se creen , son sus hijos.
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //El valor del input siempre será el mismo a no ser que cada vez que agregue una tarea, lo elimine. Si no, la variable siempre será la misma. 
    //Limpiar el cuadro de texto del nombre de la tarea:
    document.getElementById("nuevaTarea").value = ""; //Para que quede vacio. 
    
}