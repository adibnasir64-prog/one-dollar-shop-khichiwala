/* ==========================================
One Dollar Shop & Gift Centre Khichiwala
script.js
========================================== */

"use strict";

/* ==========================
Current Year
========================== */

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

/* ==========================
Smooth Scrolling
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

});

});

/* ==========================
Header Shadow
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (!header) return;

if (window.scrollY > 60) {

    header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.20)";

} else {

    header.style.boxShadow =
        "0 4px 12px rgba(0,0,0,.10)";
}

});
/* ==========================
Back To Top Button
========================== */

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

if (!topButton) return;

if (window.scrollY > 300) {

    topButton.style.display = "flex";

} else {

    topButton.style.display = "none";

}

});

/* ==========================
Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {

        current = section.getAttribute("id");

    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

    }

});

});

/* ==========================
Fade In Animation
========================== */

const fadeItems = document.querySelectorAll(
".about, .why-us, .products, .gallery, .featured-products, .contact"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

    }

});

}, {

threshold:0.20

});

fadeItems.forEach(item => {

item.style.opacity = "0";
item.style.transform = "translateY(40px)";
item.style.transition = "all .8s ease";

observer.observe(item);

});
/* ==========================
Gallery Lightbox
========================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

    const overlay = document.createElement("div");
    overlay.className = "lightbox";

    overlay.innerHTML = `
        <img src="${image.src}" alt="${image.alt}">
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
        overlay.remove();
    });

});

});

/* ==========================
Button Hover Effect
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
});

});

/* ==========================
Lazy Loading Images
========================== */

document.querySelectorAll("img").forEach(img => {

img.setAttribute("loading", "lazy");

});

/* ==========================
Website Loaded Message
========================== */

window.addEventListener("load", () => {

console.log("✅ One Dollar Shop & Gift Centre Khichiwala Website Loaded Successfully.");

});
/* ==========================
Performance Optimization
========================== */

// Prevent errors if browser doesn't support IntersectionObserver
if (!("IntersectionObserver" in window)) {

document.querySelectorAll(
    ".about, .why-us, .products, .gallery, .featured-products, .contact"
).forEach(section => {

    section.style.opacity = "1";
    section.style.transform = "translateY(0)";

});

}

/* ==========================
Refresh Active Navigation
========================== */

window.addEventListener("load", () => {

window.dispatchEvent(new Event("scroll"));

});

/* ==========================
Disable Right Click on Images
========================== */

document.querySelectorAll(".gallery-grid img").forEach(img => {

img.addEventListener("contextmenu", function(e){

    e.preventDefault();

});

});

/* ==========================
Image Error Handler
========================== */

document.querySelectorAll("img").forEach(img => {

img.addEventListener("error", function(){

    this.alt = "Image not available";

});

});

/* ==========================
Website Ready
========================== */

console.log("====================================");
console.log("One Dollar Shop & Gift Centre");
console.log("Khichiwala Website Ready");
console.log("Developed Successfully");
console.log("====================================");
/* ========================== Performance Optimization ========================== */
// Prevent errors if browser doesn't support IntersectionObserver if (!("IntersectionObserver" in window)) {
document.querySelectorAll(
    ".about, .why-us, .products, .gallery, .featured-products, .contact"
).forEach(section => {

    section.style.opacity = "1";
    section.style.transform = "translateY(0)";

});
}
/* ========================== Refresh Active Navigation ========================== */
window.addEventListener("load", () => {
window.dispatchEvent(new Event("scroll"));
});
/* ========================== Disable Right Click on Images ========================== */
document.querySelectorAll(".gallery-grid img").forEach(img => {
img.addEventListener("contextmenu", function(e){

    e.preventDefault();

});
});
/* ========================== Image Error Handler ========================== */
document.querySelectorAll("img").forEach(img => {
img.addEventListener("error", function(){

    this.alt = "Image not available";

});
});
/* ========================== Website Ready ========================== */
console.log("===================================="); console.log("One Dollar Shop & Gift Centre"); console.log("Khichiwala Website Ready"); console.log("Developed Successfully"); console.log("====================================");
