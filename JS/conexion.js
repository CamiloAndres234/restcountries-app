// Aquí guardaremos todos los países
let countries = [];

// Conexión para obtener la lista de países (solo nombre, bandera y capital)
async function conexionLista() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital");
  const data = await res.json();
  return data; // devolvemos el arreglo de países
}

// Función Home: muestra la cantidad y lista en consola
function Home(lista) {
  console.log("Países cargados:", lista.length); // cantidad total
  console.log(lista); // muestra todo el arreglo

  // Mostrar en pantalla
  const root = document.getElementById("root");
  root.innerHTML = ""; // limpiar antes

  lista.forEach(pais => {
    root.innerHTML += `
      <div>
        <img src="${pais.flags.svg}" width="40">
        <strong>${pais.name.common}</strong> - ${pais.capital ? pais.capital[0] : "Sin capital"}
      </div>
    `;
  });
}

// Cargar todos los países al iniciar
async function General() {
  if (countries.length === 0) {
    countries = await conexionLista(); // llamamos a la API
  }
  Home(countries); // mostramos lo que tenemos
}

// Ejecutamos la función principal
General();
