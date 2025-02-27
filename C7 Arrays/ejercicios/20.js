function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let bandera = false;
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] === array[i + 1]) bandera = true;
  }
  return bandera;
}

module.exports = todosIguales;
