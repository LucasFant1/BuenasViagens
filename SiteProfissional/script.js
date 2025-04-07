let indiceAtual = 0;
const clientes = document.querySelectorAll(".carrosel .cliente, .cliente, .cliente");

  function mostrarCliente(index) {
    clientes.forEach((cliente, i) => {
      cliente.style.display = (i === index) ? "block" : "none";
    });
  }

  function trocarProximo() {
    indiceAtual = (indiceAtual + 1) % clientes.length;
    mostrarCliente(indiceAtual);
  }

  function trocarAnterior() {
    indiceAtual = (indiceAtual - 1 + clientes.length) % clientes.length;
    mostrarCliente(indiceAtual);
  }

mostrarCliente(indiceAtual);