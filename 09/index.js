const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const novoArray = numeros.filter((i) => {
  return i > 0;
});

console.log(novoArray);
