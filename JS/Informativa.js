let esFavorito = false;

// --- Función para mostrar la pantalla principal (HOME) ---
function volverHome() {
  // Si ya tienes una función Home(), puedes llamarla directamente aquí
  if (typeof Home === "function") {
    Home();
  } else if (typeof mostrarHome === "function") {
    mostrarHome();
  } else {
    // Si no hay función Home, limpia y muestra algo básico
    const root = document.getElementById("root");
    root.innerHTML = `
      <section class="c-home">
        <h2>🌍 Inicio</h2>
        <p>Bienvenido. Aquí debería cargarse la lista de países.</p>
      </section>
    `;
  }
}

// --- Función para agregar o quitar un país de favoritos ---
function toggleFavorito(paramid, paramname) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const existe = favoritos.some(p => p.name === paramname);

  if (existe) {
    // Eliminar país si ya es favorito
    favoritos = favoritos.filter(p => p.name !== paramname);
    esFavorito = false;
  } else {
    // Buscar país original en array global
    const pais = countries.find(c => c.name?.common === paramname);

    if (!pais || !pais.name || !pais.name.common) {
      console.warn("País inválido al intentar agregar a favoritos:", pais);
      return;
    }

    favoritos.push({
      id: paramid,
      name: pais.name.common,
      flags: pais.flags,
      capital: pais.capital,
      region: pais.region,
      population: pais.population
    });

    esFavorito = true;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  // Actualiza el ícono del corazón
  const boton = document.querySelector(`#corazon-${CSS.escape(paramid)}`);
  if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

// --- Función para mostrar detalle de un país ---
async function Detalle(parametro) {
  const root = document.getElementById("root");

  try {
    const pais = countries.find(c => c.name?.common === parametro);

    if (!pais || !pais.name || !pais.name.common) {
      throw new Error("País no encontrado");
    }

    const paisId = pais.name.common;
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(p => p.name === pais.name.common);

    const idiomas = pais.languages ? Object.values(pais.languages).join(", ") : "No disponible";
    const monedas = pais.currencies ? Object.values(pais.currencies).map(c => c.name).join(", ") : "No disponible";

    root.innerHTML = `
      <section class="c-detalle">
        <img src="${pais.flags?.svg || ''}" 
             alt="Bandera de ${pais.name.common}" 
             height="120" width="auto">
        <p><b>${pais.name.common.toUpperCase()}</b></p>
        <p><b>Capital:</b> ${Array.isArray(pais.capital) ? pais.capital[0] : "No disponible"}</p>
        <p><b>Región:</b> ${pais.region || "Desconocida"}</p>
        <p><b>Población:</b> ${pais.population?.toLocaleString() || "No disponible"}</p>
        <p><b>Área:</b> ${pais.area?.toLocaleString() || "No disponible"} km²</p>
        <p><b>Idiomas:</b> ${idiomas}</p>
        <p><b>Monedas:</b> ${monedas}</p>

        <button onclick="toggleFavorito('${paisId}', '${pais.name.common}')">
          <span id="corazon-${paisId}">${esFavorito ? "❤️" : "🤍"}</span> Favorito
        </button>

        <br><br>
        <button class="btn-volver" onclick="volverHome()">← Volver al inicio</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = `
      <section class="c-detalle">
        <p style="color:red;"><b>Error:</b> ${error.message}</p>
        <br>
        <button class="btn-volver" onclick="volverHome()">← Volver al inicio</button>
      </section>
    `;
  }
}
