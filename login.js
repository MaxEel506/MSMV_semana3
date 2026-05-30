function ActualizarPrecio() {
    const zona = document.getElementById("zona").value;
    const precioTotal = document.getElementById("precioTotal");
    let precio = 0;
            switch (zona) {
            case "general": precio = 100; break;
            case "gradas": precio = 300; break;
            case "snake-pit-vip": precio = 500; break;
            default: precio = 0; break;
        }
    precioTotal.textContent = `Precio Total: $${precio}`;
}
function PrecioFinal(event) {
    event ? event.preventDefault() : null;
    const zona = document.getElementById("zona").value;
    zona.addEventListener("change", ActualizarPrecio); {
    ActualizarPrecio();
    };
};
function ContarCaracteres(event) {
    const input = event.target;
    const contador = document.getElementById("contadorCaracteres");
    contador.textContent = `${input.value.length}/20 caracteres`;
    contador.style.color = input.value.length > 20 ? "red" : "black";
}


function Comprar(event) {
    event ? event.preventDefault() : null;
    const nombre = document.getElementById("nombre").value;
    const error = document.getElementById("error");
    error.textContent = "";

    if (nombre.trim() === "") {
        error.textContent = "Error: El nombre no puede estar vacío.";
        return;
    }
    alert("¡Compra exitosa para " + nombre + "!");
}
function ActivarSonido(event) {
    const btn = event.target;
    const pantalla = document.getElementById("pantalla");
    const botones = document.getElementsByClassName("sonido-btn");
    for (let L = 0; L < botones.length; L++) {
        botones[L].style.backgroundColor = "";
        botones[L].style.color = "";
    }
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
    pantalla.textContent = "Reproduciendo: " + btn.id;
}

function ActualizarDistorsion(event) {
    document.getElementById("texto-distorsion").textContent = "Nivel de Distorsión: " + event.target.value + "%";
}
function BuscarEquipo(event) {
    const busqueda = event.target.value.toLowerCase();
    const items = document.getElementsByClassName("item-equipo"); 
    for (let L = 0; L < items.length; L++) {
        const texto = items[L].textContent.toLowerCase();
        if (texto.includes(busqueda)) {
            items[L].style.display = "";
        } else {
            items[L].style.display = "none";
        }
    }
}
function MarcarCargado(event) {
    const item = event.target;
    item.style.color = "green";
    item.style.textDecoration = "line-through";
}