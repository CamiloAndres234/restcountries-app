// --- Función para mostrar el detalle del país ---
function DetallePais(nombrePais) {
    // Buscar el país (ignorando mayúsculas)
    const pais = countries.find(c => 
        c.name?.common && c.name.common.toLowerCase() === nombrePais.toLowerCase()
    );

    if (!pais) {
        alert("No se encontró información del país seleccionado.");
        return;
    }

    // Variables con datos del país
    const bandera = pais.flags?.svg || pais.flags?.png || "";
    const capital = Array.isArray(pais.capital) && pais.capital.length ? pais.capital[0] : "Sin capital";
    const region = pais.region || "Desconocida";
    const poblacion = pais.population?.toLocaleString() || "No disponible";
    const area = pais.area ? pais.area.toLocaleString() + " km²" : "No disponible";
    const idioma = pais.languages ? Object.values(pais.languages)[0] : "No disponible";
    const moneda = pais.currencies ? Object.values(pais.currencies)[0].name : "No disponible";


    const root = document.getElementById("root");

    root.innerHTML = `
        <div class="detalle-pais">
            <h2>${pais.name.common}</h2>
            <img src="${bandera}" width="200" height="120" alt="Bandera de ${pais.name.common}">
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Región:</strong> ${region}</p>
            <p><strong>Población:</strong> ${poblacion}</p>
            <p><strong>Área:</strong> ${area}</p>
            <p><strong>Idioma principal:</strong> ${idioma}</p>
            <p><strong>Moneda:</strong> ${moneda}</p>

            <br>
            <button class="btn-volver" onclick="volverHome()">← Volver</button>
        </div>
    `;
}

// --- Función para volver al inicio ---
function volverHome() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    Home(); // vuelve a mostrar la lista principal
}
