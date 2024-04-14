//your code here
// Render each element twice inside a divblock
const buttonDiv = document.createElement("div");
const button1 = document.createElement("button");
button1.textContent = "Test1";
buttonDiv.appendChild(button1);

const button2 = document.createElement("button");
button2.textContent = "Test2";
buttonDiv.appendChild(button2);

document.body.appendChild(buttonDiv);

// Set data-ns-test attribute value for button
button1.setAttribute("data-ns-test", "block-inline-button");
button2.setAttribute("data-ns-test", "block-inline-button");

// Check if the button is inline or block
const buttonComputedStyle = window.getComputedStyle(button1);
const isButtonInline = buttonComputedStyle.display === "inline";

// Print the result
console.log(`Answer: ${isButtonInline ? "Inline" : "Block"}`);
