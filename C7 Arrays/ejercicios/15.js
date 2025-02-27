function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let grande = 0;
  for(let i in array){
    if (array[i] > array[grande]){
      grande = i;
    }
  }
  return Number(grande);
}

module.exports = encontrarIndiceMayor;
