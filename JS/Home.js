// --- Función para buscar países ---
function buscadorfuncion(sza) {
    if (sza.length >= 3) {
        const filtrados = [];
        for (let i = 0; i < countries.length; i++) {
            const nombre = countries[i].name.common.toLowerCase();
            if (nombre.includes(sza.toLowerCase())) {
                filtrados.push(countries[i]);
            }
        }
        document.getElementById("la-lista").innerHTML = generarLista(filtrados);
    } else {
        document.getElementById("la-lista").innerHTML = generarLista(countries);
    }
}

// --- Función para generar la lista de países ---
function generarLista(arrayPaises) {
    let listaHTML = "";
    for (let i = 0; i < arrayPaises.length; i++) {
        let nombre = arrayPaises[i].name.common;
        let bandera = arrayPaises[i].flags?.svg || "";
        let capital = arrayPaises[i].capital ? arrayPaises[i].capital[0] : "Sin capital";

        listaHTML += `
        <div class="c-lista-pais" onclick="DetallePais('${nombre}')">
            <strong>${nombre}</strong>
            <img src="${bandera}" width="80" height="50" loading="lazy" alt="Bandera de ${nombre}">
            <p>${capital}</p>
        </div>`;
    }
    return listaHTML;
}

// --- Función principal Home ---
function Home() {
    const root = document.getElementById("root");
    root.innerHTML = ""; // Limpia el contenido previo

    // --- Input buscador ---
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar país...";
    buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

    // --- Botones de filtro por continente ---
    const continentes = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("continentes-container");

    for (let i = 0; i < continentes.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = continentes[i];

        btn.addEventListener("click", () => {
            const filtrados = countries.filter(c => c.region === continentes[i]);
            document.getElementById("la-lista").innerHTML = generarLista(filtrados);
        });

        contenedorFiltro.appendChild(btn);
    }

    // --- Contenedor lista ---
    const listaHTML = generarLista(countries);
    const contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-contenedor-lista");
    contenedorLista.id = "la-lista";
    contenedorLista.innerHTML = listaHTML;

    // --- Agregar todo al root ---
    root.appendChild(buscador);
    root.appendChild(contenedorFiltro);
    root.appendChild(contenedorLista);
}