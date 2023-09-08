"use strict";

const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");
const navLinks = document.querySelector("nav > .wrapper");
const navAfter = document.querySelector("nav::after");

function toggleMenu() {
	navLinks.classList.toggle("visible");
	hamburger.classList.toggle("hidden");
	closeHamburger.classList.toggle("hidden");
	navAfter.style.opacity = 1;
}

hamburger.addEventListener("click", toggleMenu);
closeHamburger.addEventListener("click", toggleMenu);
