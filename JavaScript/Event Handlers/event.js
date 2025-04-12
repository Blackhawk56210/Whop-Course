function sayHello() {
    alert("Hello, Javascript");
}

const button  = DocumentTimeline.getElementById("btn");
button.addEventListener("click", () => { 
    alert("Hello from Javascript")
});

/*you could also just pass the sayHello function like this
button.addEventListener("click", sayHello);
*/

// hover effect
const text = document.getElementById("hoverText");

text.addEventListener("mouseover", function () {
    text.style.color = "red";
});

text.addEventListener("mouseout", function () {
    text.style.color = "gray";
});

// Keyup & KeyDown events
const input = document.getElementById("textInput");
const display = document.getElementById("displayText");

// every time a key is released an input is displayed
input.addEventListener("keyup", function(event) {
    display.textContent = "You typed " + event.target.value;
})