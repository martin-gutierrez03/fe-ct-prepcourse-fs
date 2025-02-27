function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  /* let pivot = numeros[0]
  for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] === pivot){
      return pivot;
    }else{
      pivot = numeros[i];
    }
  } */
  let eliminado = numeros.pop()
  let bandera = true;
  do {
    if(!numeros.length){
      bandera = false;
      continue;
    }
    if(numeros.find(num => num === eliminado) !== undefined){
      return eliminado;
    }else{
      eliminado = numeros.pop();
    }
  } while (bandera);
}

module.exports = encontrarElementoRepetido;