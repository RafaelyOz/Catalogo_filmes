let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 8000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

const guias = document.querySelectorAll(".tab");
const conteudoFilmes = document.querySelectorAll(".filmes");

guias.forEach((guia, index) => {
  guia.addEventListener("click", () => {
    guias.forEach((tab) => tab.classList.remove("active"));
    guia.classList.add("active");

    conteudoFilmes.forEach((conteudo, i) => {
      if (index === i) {
        conteudo.classList.add("active");
      } else {
        conteudo.classList.remove("active");
      }
    });
  });
});

class DecadeFilter {
  constructor() {
    this.init();
  }

  init() {
    const decadeRadios = document.querySelectorAll(
      'input[name="decade-filter"]'
    );
    const filmeElements = document.querySelectorAll(".filme");

    decadeRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        this.filterByDecade(radio.value, filmeElements);
      });
    });
  }

  filterByDecade(selectedDecade, filmeElements) {
    filmeElements.forEach((filme) => {
      const filmeDecade = filme.getAttribute("data-decade");

      if (selectedDecade === "all" || filmeDecade === selectedDecade) {
        filme.style.display = "block";
      } else {
        filme.style.display = "none";
      }
    });
  }
}

const decadeFilter = new DecadeFilter();

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".movie-slide");
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100 + "%";
  document.querySelector(".carousel-container").style.transform =
    "translateX(" + offset + ")";
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}
