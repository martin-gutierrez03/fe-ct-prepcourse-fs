function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let contador = 0;
  arrayOfNums.forEach(element => contador += element);
  return contador;
}

module.exports = agregarNumeros;
