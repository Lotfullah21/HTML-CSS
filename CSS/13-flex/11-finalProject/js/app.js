const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

// Scrolling smoothly

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		links.classList.remove("show-links");
		const id = e.target.getAttribute("href").slice(1);
		const ele = document.getElementById(id);
		// navbar position
		let pos = ele.offsetTop - 62;

		window.scrollTo({
			left: 0,
			top: pos,
			behavior: "smooth",
		});
	});
});
