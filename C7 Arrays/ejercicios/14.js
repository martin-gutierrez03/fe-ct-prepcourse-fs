function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let conteo = 0;
  for(let i in array){
    if(array[i] > 10) conteo += 1;
  }
  return conteo;
}

module.exports = contarElementosMayoresA10;
