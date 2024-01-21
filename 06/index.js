const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const novoArray = cidades.filter((index) => {
  return index.length <= 8;
});

const arrayFormatado = novoArray.join(", ");

console.log(novoArray);

console.log(arrayFormatado);
