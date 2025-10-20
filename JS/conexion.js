// Aquí guardaremos todos los países
let countries = [];

// Conexión para obtener la lista de países
async function conexionLista(filtroContinente) {

  if (filtroContinente == "All") {
    // Trae todos los países
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,area,languages,currencies");
    const data = await res.json();
    return data;
  } else {
    // Trae solo los países de un continente específico
    const res = await fetch(`https://restcountries.com/v3.1/region/${filtroContinente.toLowerCase()}?fields=name,flags,capital,region`);
    const data = await res.json();
    return data;
  }

}

// Cargar todos los países al iniciar
async function General() {
  if (countries.length === 0) {
    countries = await conexionLista("All"); // Igual que con pokes
  }
  Home(countries); // Mostrar lista
}

General();

// Filtro por continente
async function FiltroConexion(Elfiltro) {
  document.getElementById("countries-grid").innerHTML = ""; // limpiar lista
  countries = await conexionLista(Elfiltro); // pedir filtrados
  const listaHTML = generarListaPaises(countries); // generar HTML
  document.getElementById("countries-grid").innerHTML = listaHTML; // pintar en pantalla
}

function Conexion() {
    // Mostrar alerta interna
  alert("⚙️ Apartado interno de la app — conexión activa, no molestar 😎");
}
