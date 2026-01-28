function abrirModal(titulo, descricao, preco) {
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalDescricao").innerText = descricao;
    document.getElementById("modalPreco").innerText = preco;
  
    document.getElementById("modal").style.display = "flex";
  }
  
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  