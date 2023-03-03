import { createElement } from "./createHTML.js"; /* createElement(tag, id, className, name, value, content) */
import { update } from "./functions.js";

// -------creating html structure and assigning an id property as well all the other properties----------

// ---HEADING--- 

const divHeading = createElement("div", "heading", "heading", "", "", "");
const h1 = createElement("h1", "counter", "counter", "", "", "counter");
document.body.appendChild(divHeading);
divHeading.appendChild(h1);

// ---END HEADING ---

// --- BUTTONS ---
const divButtons = createElement("div", "buttons", "buttons", "", "", "");
const incBtn = createElement("button", "increment", "increment", "increment", "+", "+");
const decBtn = createElement("button", "decrement", "decrement", "decrement", "-", "-");
const resetBtn = createElement("button", "reset", "reset", "reset", "reset", "RESET");
document.body.appendChild(divButtons);
divButtons.appendChild(incBtn);
divButtons.appendChild(resetBtn);
divButtons.appendChild(decBtn);
// --- END BUTTONS ---

// function
divButtons.addEventListener("click", update);

