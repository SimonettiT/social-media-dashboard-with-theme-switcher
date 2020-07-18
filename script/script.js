const buttonToggle = document.querySelector("#toggle-button");

buttonToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    buttonToggle.classList.toggle("active");
});