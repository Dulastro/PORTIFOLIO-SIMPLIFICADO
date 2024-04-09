const btn = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btn.addEventListener("click", () => {
  mostrarMaisProjetos();
  esconderBtn();
});

function esconderBtn() {
  btn.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
}
