const inContianer = document.querySelector(".input-container");
const input = document.querySelector("input");
const whiteMg = document.querySelector("#whitemg");
const grayMg = document.querySelector("#graymg");

input.addEventListener("focus", function () {
    inContianer.classList.add("focus");
    whiteMg.classList.add("hide");
    grayMg.classList.remove("hide");
});

input.addEventListener("blur", function () {
    inContianer.classList.remove("focus");
    whiteMg.classList.remove("hide");
    grayMg.classList.add("hide");
});
