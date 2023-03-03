// init counter
let count = 0;

export const update = (event) => {
    if (event.target == document.querySelector("#increment")) {
        count++;
    }
    if (event.target == document.querySelector("#decrement")) {
        count--;
    }
    if (event.target == document.querySelector("#reset")) {
        count = 0;
    }
    return document.querySelector("h1").innerHTML = count;

}