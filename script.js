let items = document.querySelectorAll("li");
let button = document.querySelector(".button");
let container = document.querySelector(".container");
let contain = document.querySelector(".cont");
const element = document.createElement("div");
let checked = false;
let last;
let once = false;
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", (e) => {
		if (checked) {
			last.style.backgroundColor = "hsl(217, 11%, 30%)";
			last.style.color = "hsl(217, 12%, 63%)";
		}
		last = e.target;
		checked = true;
		e.target.style.backgroundColor = "hsl(217, 12%, 63%)";
		e.target.style.color = "whitesmoke";            
			button.addEventListener("click", () => {
                container.style.display = "none";
				contain.style.display = "flex";
			});
		});
}
function Next_form(){
	if (checked) {
		element.className = "rating";
		element.textContent = `You selected ${last.textContent} out of 5`;
		contain.appendChild(element);
}}
