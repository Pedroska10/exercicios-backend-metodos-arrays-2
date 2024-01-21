const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const existealavraInvalida = palavras.some((valor) => {
  return valor.length > 5;
});
if (existealavraInvalida) {
  console.log("Existe palavra inv[alida");
} else {
  console.log("array validado");
}
