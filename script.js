
  

// Função para alternar imagens automaticamente
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    slides[currentIndex].classList.remove('active'); // Remove a classe 'active' da imagem atual
    currentIndex = (currentIndex + 1) % slides.length; // Avança para a próxima imagem
    slides[currentIndex].classList.add('active'); // Adiciona a classe 'active' à nova imagem
}

// Troca a imagem a cada 3 segundos
setInterval(changeSlide, 3000);


const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});

const reviewWrapper = document.getElementById("reviewWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
let reviewWidth = document.querySelector(".review").offsetWidth;
const totalReviews = document.querySelectorAll(".review").length;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    reviewWrapper.style.transform = `translateX(${-index * reviewWidth}px)`;
}

// Atualiza a largura ao redimensionar a tela
window.addEventListener("resize", () => {
    reviewWidth = document.querySelector(".review").offsetWidth;
    updateCarousel();
});

// Botão "Próximo"
nextBtn.addEventListener("click", () => {
    if (index < totalReviews - 1) {
        index++;
    } else {
        index = 0; // Volta ao início
    }
    updateCarousel();
});

// Botão "Anterior"
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = totalReviews - 1; // Volta ao último
    }
    updateCarousel();
});

// Scroll automático a cada 5 segundos
setInterval(() => {
    if (index < totalReviews - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
}, 5000);
