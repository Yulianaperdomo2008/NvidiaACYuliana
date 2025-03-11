document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
      });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });

  // Mostrar la primera imagen
  showSlide(currentIndex);
});



// segundo carrucel

let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function moveUp() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function moveDown() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const translateY = -currentIndex * 400;
    carousel.style.transform = `translateY(${translateY}px)`;
}

// Desplazamiento automático cada 3 segundos
setInterval(moveDown, 6000);

// carrucel estatico 

const content = [
    // Noticias
    [
        { img: "https://via.placeholder.com/250", title: "RTX 5000 anunciada", desc: "Descubre la nueva generación de GPUs de NVIDIA.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "NVIDIA Studio mejora IA", desc: "Herramientas avanzadas para creativos digitales.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "RTX en el cine", desc: "Cómo NVIDIA está revolucionando la industria del cine.", link: "#" }
    ],
    // Seminarios Web
    [
        { img: "https://via.placeholder.com/250", title: "Futuro de la Computación", desc: "Explora el impacto de la IA en la creatividad.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "RTX para arquitectos", desc: "Cómo mejorar el renderizado con NVIDIA RTX.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "CloudXR en AEC", desc: "Streaming de alta fidelidad para arquitectura.", link: "#" }
    ],
    // Casos de Éxito
    [
        { img: "https://via.placeholder.com/250", title: "Pixar y NVIDIA", desc: "Cómo Pixar usa RTX para crear animaciones increíbles.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "NASA y Simulación", desc: "La NASA usa GPUs NVIDIA en simulaciones espaciales.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "Automotriz y RTX", desc: "Las GPUs de NVIDIA ayudan a diseñar autos más seguros.", link: "#" }
    ],
    // Demos
    [
        { img: "https://via.placeholder.com/250", title: "Ray Tracing en juegos", desc: "Experimenta la iluminación realista con RTX.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "IA en edición de video", desc: "NVIDIA acelera los flujos de trabajo de video.", link: "#" },
        { img: "https://via.placeholder.com/250", title: "Omniverse en acción", desc: "Explora el poder del 3D colaborativo.", link: "#" }
    ]
];

function changeTab(index) {
    // Actualizar la pestaña activa
    document.querySelectorAll(".tab").forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
    });

    // Actualizar el contenido de las tarjetas
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = content[index].map(card => `
        <div class="card">
            <img src="${card.img}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
            <a href="${card.link}">Ver más</a>
        </div>
    `).join('');
}

// Inicializar con la primera pestaña
changeTab(0);

//Apartado de fotos

