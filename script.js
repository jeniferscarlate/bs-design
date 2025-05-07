const imagens = [
    "img/look1.jpg",
    "img/look2.jpg",
    "img/look3.jpg",
    "img/look4.jpg",
    "img/look5.jpg",
    "img/look6.jpg",
    "img/look7.jpg"
];

let indexAtual = 0;
const imgElement = document.getElementById("carouselImg");

document.getElementById("prevBtn").addEventListener("click", () => {
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
    imgElement.src = imagens[indexAtual];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % imagens.length;
    imgElement.src = imagens[indexAtual];
});
