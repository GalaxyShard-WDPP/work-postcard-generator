
let states = document.getElementById("states");
let postcard = document.getElementById("postcard");
let heading = document.getElementById("state-heading");
let greeting = document.getElementById("greeting");

states.addEventListener("change", () => {
    let index = states.selectedIndex;
    let selection = states.options[index];

    heading.textContent = `${selection.textContent}`;
    greeting.textContent = "Greetings from";
    postcard.style.backgroundImage = `url(img/${states.value}@2x.jpg)`;
});