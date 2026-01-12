/* ===== Image Slider ===== */
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// Auto slide
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

/* ===== Order Form → WhatsApp ===== */
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const values = [...this.elements]
        .filter(el => el.value)
        .map(el => el.value)
        .join(" | ");

    const message = encodeURIComponent(
        "Hello Uwezo Cup Cakes, I would like to place an order:\n" + values
    );

    window.open(`https://wa.me/255782505154?text=${message}`, "_blank");
});
