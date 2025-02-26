const reviews = [
    { name: "Lucas Ferreira", rating: "★★★★★", comment: "Internet muito rápida e estável! Suporte excelente." },
    { name: "Mariana Souza", rating: "★★★★☆", comment: "Ótimo atendimento e planos acessíveis. Recomendo!" },
    { name: "Rafael Mendes", rating: "★★★★★", comment: "Instalação foi super rápida e a conexão é incrível!" }
];


let index = 0;
    function updateReview() {
        index = (index + 1) % 10;
        document.getElementById("reviewWrapper").style.transform = `translateX(-${index * 100}%)`;
    }
setInterval(updateReview, 4000);

function toggleAnswer(element) {
    let answer = element.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
}
  

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