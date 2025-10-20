function Original() {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Limpiar pantalla

  // Contenedor general centrado
  const contenedor = document.createElement("section");
  contenedor.classList.add("info-app");

  // Imagen decorativa (mapa)
  const banner = document.createElement("img");
  banner.src = "https://images.emojiterra.com/google/android-12l/512px/1f5fa.png";
  banner.alt = "Mapa decorativo";
  banner.classList.add("banner-poke");

  // Título
  const titulo = document.createElement("h2");
  titulo.textContent = "GlobeScope";

  // Descripción general
  const descripcion = document.createElement("p");
  descripcion.innerHTML = `
    Bienvenido a <b>GlobeScope</b>, una aplicación creada por <b>Camilo Andres Alarcón Mendoza</b>.<br>
    Explora información actualizada de todos los países del mundo: sus banderas, capitales, idiomas, monedas y más.<br>
    ¡Descubre el planeta desde una nueva perspectiva! 🌎✨
  `;

  // Contenedor de tarjetas informativas
  const contenedorTarjetas = document.createElement("div");
  contenedorTarjetas.classList.add("tarjetas-info");

  // Tarjetas
  const tarjetas = [
    {
      titulo: "🎯 Objetivo",
      texto:
        "Ofrecer una forma visual, educativa e interactiva para conocer los países del mundo, usando la API <a href='https://restcountries.com/' target='_blank'>RestCountries</a>.",
    },
    {
      titulo: "⚙️ Funcionalidades",
      texto:
        "🔹 Buscar países por nombre<br>🔹 Filtrar por continente<br>🔹 Visualizar bandera y capital<br>🔹 Ver idiomas, monedas y población.",
    },
    {
      titulo: "💻 Tecnologías",
      texto:
        "HTML, CSS y JavaScript puro.<br>Datos en tiempo real obtenidos con <b>fetch()</b> desde RestCountries.",
    },
    {
      titulo: "👨‍💻 Desarrollador",
      texto:
        "Proyecto desarrollado por <b>Camilo Andres Alarcón Mendoza</b> como práctica educativa en consumo de APIs y diseño web.",
    },
  ];

  tarjetas.forEach((info) => {
    const card = document.createElement("div");
    card.classList.add("country-card");
    const h3 = document.createElement("h3");
    h3.textContent = info.titulo;
    const p = document.createElement("p");
    p.innerHTML = info.texto;
    card.appendChild(h3);
    card.appendChild(p);
    contenedorTarjetas.appendChild(card);
  });

  // Agregar elementos al contenedor principal
  contenedor.appendChild(banner);
  contenedor.appendChild(titulo);
  contenedor.appendChild(descripcion);
  contenedor.appendChild(contenedorTarjetas);

  // Mostrar en pantalla
  root.appendChild(contenedor);
}
