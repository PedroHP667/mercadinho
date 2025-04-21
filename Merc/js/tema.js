// ../js/tema.js
document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("toggle-theme") || document.getElementById("theme-toggle");
  if (!botaoTema) return;

  // Alterna a classe no body
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // (Opcional) Salvar tema no localStorage
    const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("tema", temaAtual);
  });

  // (Opcional) Carregar o tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }
});
