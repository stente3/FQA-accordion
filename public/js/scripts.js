// Variables
let heading = document.querySelectorAll(".heading");
let arrow = document.querySelectorAll(".arrow");
let paragraph = document.querySelectorAll(".paragraph__faq");

// Funtions
heading.forEach((element) => {
	element.addEventListener("click", () => {
		paragraph.forEach((elemento, i) => {
			paragraph[i].classList.remove("active");
			arrow[i].classList.remove("active__arrow");
		});
		element.nextElementSibling.nextElementSibling.classList.add("active");
		element.nextElementSibling.children[0].classList.add("active__arrow");
	});
});
