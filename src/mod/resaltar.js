


function resaltar (elemento, nombreClase) {

    //Se elimina la clase activa de todos los elementos

    let arrayBtnMenu = document.getElementsByClassName(nombreClase);
    //console.log("arrayBtnMenu",arrayBtnMenu);

    for (let index = 0; index < arrayBtnMenu.length; index++) {
        const item = arrayBtnMenu[index];
        item.classList.remove("active");        
    }    
    //Se le asigna la clase activa al elemento seleccionado
    //Tiene quemada la clase "active" con reglas de estilo para resaltar el elemento
    elemento.classList.add("active");
}


export default resaltar;