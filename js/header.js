const whopper = document.getElementById("burger-box");
// const span = document.querySelectorAll(".burger-box span");

// const contact = document.getElementById('button');

whopper.addEventListener("click", menuRollOut);
// contact.addEventListener("click", contactRollOut)

// ------------------the nav functionality in header---------------
function menuRollOut() {
    const navBox = document.querySelector("nav");
    navBox.classList.toggle("visible");
}