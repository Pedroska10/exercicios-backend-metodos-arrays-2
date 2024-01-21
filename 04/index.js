const numeros = [0, 122, 4, 6, 7, 8, 44];

const arrayValido = numeros.every((numero) => {
  return numero % 2 === 0;
});

if (arrayValido) {
  console.log("array válido");
} else {
  console.log("arrary inválido");
}
