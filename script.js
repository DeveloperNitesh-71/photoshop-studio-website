const bars = document.querySelector(".fa-bars")
const hamberger = document.querySelector(".hamburger")
bars.addEventListener("click", () => {
    hamberger.classList.toggle("come")
})