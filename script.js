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

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const orderDetails = [];

    orderDetails.push(`Name: ${formData.get("name")}`);
    orderDetails.push(`Phone: ${formData.get("phone")}`);
    orderDetails.push(`Cake Type: ${formData.get("cakeType")}`);
    orderDetails.push(`Size: ${formData.get("cakeSize")}`);
    orderDetails.push(`Flavor: ${formData.get("flavor")}`);

    const message = formData.get("message");
    if (message) {
        orderDetails.push(`Message: ${message}`);
    }

    const whatsappMessage = encodeURIComponent(
        "Hello Uwezo Cup Cakes, I would like to place an order:\n\n" + orderDetails.join("\n")
    );

    window.open(`https://wa.me/255782505154?text=${whatsappMessage}`, "_blank");
});
