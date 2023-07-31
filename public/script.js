const showMenu = document.querySelector(".box")
const menuBtn = document.querySelector(".btn")
const headerBg = document.querySelector(".header")
const middleBg = document.querySelectorAll(".middle div")

menuBtn.addEventListener("click",() => {
    showMenu.classList.toggle("hidden")
})

