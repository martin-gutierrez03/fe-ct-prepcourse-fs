function multiplicarArgumentos(...arr) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arr.length === 0) {
    return 0;
  }

  // Si se pasa solo un argumento, simplemente retorna ese valor
  if (arr.length === 1) {
    return arr[0];
  }

  // Si se pasan varios argumentos, multiplicarlos todos
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }

  return producto;
}

module.exports = multiplicarArgumentos;
