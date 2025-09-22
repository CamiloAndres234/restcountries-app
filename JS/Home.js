function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Lista de Países</h2>"; 

  // Contenedor grid
  root.innerHTML += `<div id="countries-grid"></div>`;
  const grid = document.getElementById("countries-grid");

  // Recorremos el arreglo global "countries"
  for (let i = 0; i < countries.length; i++) {
    let id = i; // índice del país
    let nombre = countries[i].name.common; // nombre común
    let bandera = countries[i].flags.svg; // bandera
    let capital = countries[i].capital ? countries[i].capital[0] : "Sin capital"; // capital (si existe)

    // Agregamos cada país como tarjeta estilizada
    grid.innerHTML += `
      <div class="country-card" onclick="DetallePais(${id})">
        <img src="${bandera}" alt="Bandera de ${nombre}" loading="lazy">
        <strong>${nombre}</strong>
        <p>${capital}</p>
      </div>
    `;
  }
}
