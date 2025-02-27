function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // return array.map(element => element * 2);
  for(let i in array){
    array[i] = array[i] * 2;
  }
  return array;
}

module.exports = duplicarElementos;
