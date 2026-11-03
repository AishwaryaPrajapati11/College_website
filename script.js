// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

// Contact form demo
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        document.getElementById("formMessage").textContent =
            "Thank you, " + name + "! Your message has been received (demo).";

        contactForm.reset();
    });
}
