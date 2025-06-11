const surpriseBtn = document.querySelector(".surprise-button")
const letterBox = document.getElementById("carta")
const closeBtn = document.getElementById("closeLetter")

surpriseBtn.addEventListener("click", () => {
  letterBox.style.display = "block"
  surpriseBtn.style.display = "none"
  // Scroll para carta aparecer na tela (opcional)
  letterBox.scrollIntoView({ behavior: "smooth" })
})

closeBtn.addEventListener("click", () => {
  letterBox.style.display = "none"
  surpriseBtn.style.display = "inline-block"
})
