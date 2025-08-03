document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("adicionar-tarefa");
  const blocoTarefas = document.getElementById("bloco-tarefas");

  botao.addEventListener("click", () => {
    const bloco = document.createElement("div");
    bloco.className = "note";

    const data = new Date().toLocaleString("pt-BR");

    bloco.innerHTML = `
      <strong>${data}</strong>
      <button class="delete-btn" title="Excluir tarefa">×</button>
      <textarea placeholder="O que você estudou nesse ciclo?"></textarea>
    `;

    blocoTarefas.prepend(bloco);
  });

  // Delegação de evento para excluir bloco
  blocoTarefas.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const bloco = event.target.closest(".note");
      bloco.remove();
    }
  });
});
