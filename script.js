function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatarAlec-light.png")
    img.setAttribute("alt", "Imagem do Alec com Gato")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatarAlec.png")
    img.setAttribute(
      "alt",
      "Imagem do Alec com uma camisa social listrada azul"
    )
  }
}
