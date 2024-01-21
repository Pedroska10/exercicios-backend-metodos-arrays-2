const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const listaValida = palavras.some((bebida) => {
  return bebida === "cerveja" || bebida === "vodka";
});

if (listaValida) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo vamos as compras");
}
