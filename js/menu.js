"use strict";

// Selecting elements from the DOM
const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");
const navLinks = document.querySelector("nav > .wrapper");
const nav = document.querySelector("nav");
const menuBg = document.querySelector(".menu-bg");

// Function to toggle the menu
function toggleMenu() {
	navLinks.classList.toggle("visible");
	hamburger.classList.toggle("hidden");
	closeHamburger.classList.toggle("hidden");
	menuBg.classList.toggle("visible");
}

// Event listener for hamburger icon click
hamburger.addEventListener("click", toggleMenu);

// Event listener for close hamburger icon click
closeHamburger.addEventListener("click", toggleMenu);

// Selecting all links in the menu
const links = document.querySelectorAll("nav a");

// Adding click event listener to each link
links.forEach((link) => {
	if (navLinks.classList.contains("visible"))
		link.addEventListener("click", toggleMenu);
});
