// Variables
let heading = document.querySelectorAll(".heading");
let hola = [10, 20, 30, 50, 60, 70];
let paragraph = document.querySelectorAll(".paragraph__faq");

// Funtions
heading.forEach((element) => {
	element.addEventListener("click", () => {
		paragraph.forEach((elemento, i) => {
			paragraph[i].classList.remove("active");
		});
		element.nextElementSibling.nextElementSibling.classList.add("active");
	});
});
