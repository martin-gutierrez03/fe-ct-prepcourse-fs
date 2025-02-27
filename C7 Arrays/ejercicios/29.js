function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (!numeros.length ) return null;
  let seguidor = numeros[0];
  let faltante = null;
  for (let i = 1; i < numeros.length; i++) {
    if(seguidor + 1 !== numeros[i]){
      faltante = seguidor + 1;
      break;
    }else{
      seguidor = numeros[i]
    }
  }
  if(faltante){
    return faltante;
  }else{
    return null;
  }

}

module.exports = encontrarNumeroFaltante;