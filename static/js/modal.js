let images = [
    "/static/images/bmw1.jpg",
    "/static/images/bmw2.jpg",
    "/static/images/bmw3.jpg",
    "/static/images/bmw4.jpg"
];

let index = 0;
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");

function openModal(i) {
    index = i;
    modal.style.display = "block";
    modalImg.src = images[index];
}

function closeModal() {
    modal.style.display = "none";
}

function changeSlide(step) {
    index += step;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    modalImg.src = images[index];
}

/* AVTOMATIK SLAYD */
setInterval(() => {
    if (modal.style.display === "block") {
        changeSlide(1);
    }
}, 3000);
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
