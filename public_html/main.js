function cargarPais(){
    const paisNuevo = document.getElementById("pais").value;
    if(paisNuevo !== ""){
        const select = document.getElementById("listaPaises");
        const option = document.createElement("option");
        option.appendChild(document.createTextNode(paisNuevo));
        option.value = paisNuevo;
        select.appendChild(option);
    }
    else alert("Debe ingresar un nombre.");
    limpiar();
}

function borrarPais() {
    const select = document.getElementById("listaPaises");
    const option = select.selectedIndex;
    select.removeChild(select.childNodes[option]);
    limpiar();
}

function modificarPais(){
    const paisNuevo = document.getElementById("pais").value;
    if(paisNuevo !== ""){
        const select = document.getElementById("listaPaises");
        const option = select.options[select.selectedIndex];
        option.text = paisNuevo;
    }
    else alert("Debe ingresar un nombre.");
    limpiar();
}

function limpiar(){
    const inputPais = document.getElementById("pais");
    inputPais.value = "";
}
