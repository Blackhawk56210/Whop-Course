function changeText() {
    document.getElementById("main-heading").textContent = "DOM Manipulation is awesome"
}

/*
const paragraphs = document.getElementsByClassName("paragraph");
console.log("paragraphs =", paragraphs);
console.log("paragraphs[0].textContent =", paragraph[0].textContent);
*/

/*
const button = document.getElementByTagName("button");
console.log("buttons =", buttons[0].textContent);
*/


const firstParagraph = document.querySelector((".description")); //or use .querySelectorAll
allParagraphs.forEach((para) => console.log(para.textContent));
console.log(firstParagraph.textContent);