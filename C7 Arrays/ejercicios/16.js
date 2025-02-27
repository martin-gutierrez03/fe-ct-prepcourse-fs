function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // result = arr.map((element, index) => element * index);
  // return XPathResult;
  let array2 = array.map((elem,index) => {
    return elem * index;
  })
  return array2;
}

module.exports = multiplicarElementosPorIndice;
