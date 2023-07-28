"use strict";

/////////////////////////////////////
/// MOBILE NAVIGATION
/////////////////////////////////////
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const wrapperLinks = document.querySelector(".wrapper-links");
const overlay = document.querySelector(".overlay");

iconHamburger.addEventListener("click", showMenu);
iconClose.addEventListener("click", showMenu);

function showMenu() {
	wrapperLinks.classList.toggle("visible");
	overlay.classList.toggle("invisible");
	iconHamburger.classList.toggle("hidden");
	iconClose.classList.toggle("hidden");
}
