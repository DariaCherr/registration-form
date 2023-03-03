const button = document.querySelector(".btn");
document.querySelector(".text").hidden = false;

button.addEventListener('click', () => {
    document.querySelector("#finish").classList.remove("hidden");
    document.querySelector(".right-side").hidden = true;
    document.querySelector(".left-side").hidden = true;
    document.querySelector("h1").hidden = true;
    document.querySelector(".description").hidden = true;

})