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
// Mostrar carta ao clicar no botão
document.querySelector(".surprise-button").addEventListener("click", () => {
  document.getElementById("carta").style.display = "block";
  document.getElementById("carta").scrollIntoView({ behavior: "smooth" });
});

// Fechar carta
document.getElementById("closeLetter").addEventListener("click", () => {
  document.getElementById("carta").style.display = "none";
});

// Ampliar imagem ao clicar
const images = document.querySelectorAll(".photos img");

images.forEach(img => {
  img.addEventListener("click", () => {
    // Cria o fundo escuro transparente
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 1000;

    // Cria a imagem ampliada
    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.borderRadius = "15px";
    enlargedImg.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
    enlargedImg.style.cursor = "zoom-out";

    // Ao clicar, fecha
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);
  });
});
