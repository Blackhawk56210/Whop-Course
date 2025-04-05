function changeText() {
    document.getElementById("main-heading").textContent = "DOM Manipulation is awesome"
};

function removeText() {
    document.body.removeChild(newParagraph)
}

// MODIFY ELEMENT
/*
const heading = document.getElementById("main-heading");
heading.textContent = "New Heading";

heading.innerHTML = "<span style='color: red'>styled</span>heading";

heading.style.color = 'blue';
heading.style.fontSize = '24px';
heading.style.textAlign = "center";
*/


// ADDING / REMOVING / CREATING
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph";

document.body.appendChild(newParagraph);

// ADD / REMOVING / CREATING Class

/*
const heading = document.getElementById("main-heading");
heading.classList.add("highlight");

function removeClass() {
    heading.classList.remove("highlight");
}
*/

// Modifying attributes
const link = document.createElement("a");
link.setAttribute("href", "https://fonts.google.com/");
link.setAttribute("target", "_blank");
link.textContent = "Check out these fonts";
document.body.appendChild(link);