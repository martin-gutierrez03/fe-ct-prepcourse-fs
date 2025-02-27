function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => {
    // Convertimos ambos elementos a cadena y luego los comparamos
    return String(a).toLowerCase().localeCompare(String(b).toLowerCase());
  });
}

module.exports = ordenarArray;
