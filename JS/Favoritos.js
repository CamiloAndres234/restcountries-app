function Favoritos() {

  const root = document.getElementById("root");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (!Array.isArray(favoritos) || favoritos.length === 0) {
    root.innerHTML = `<p>No tienes países favoritos aún.</p>`;
    return;
  }

  // Generar el listado de favoritos
  const html = favoritos.map(pais => {
    const nombre = pais.name?.common || pais.name || "Desconocido";
    const bandera = pais.flags?.svg || pais.flags?.png || "";
    const capital = Array.isArray(pais.capital) ? pais.capital[0] : (pais.capital || "Sin capital");

    // Escapar comillas en el nombre para evitar errores en onclick
    const nombreSeguro = nombre.replace(/'/g, "\\'");

    return `
      <div class="pais-favorito" onclick="DetallePais('${nombreSeguro}')">
        <h3>${nombre}</h3>
        <img src="${bandera}" alt="Bandera de ${nombre}" width="100">
        <p>${capital}</p>
      </div>
    `;
  }).join('');

  root.innerHTML = `
    <section class="c-favoritos">
      <h2>🌟 Tus Países Favoritos</h2>
      <div class="lista-favoritos">${html}</div>
      <br>
      <button class="btn-volver" onclick="volverHome()">← Volver al inicio</button>
    </section>
  `;
   mostrarFavoritos();
}
