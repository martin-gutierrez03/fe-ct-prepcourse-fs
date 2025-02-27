function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let acumulador = num;
  for(let i = 0; i< 8; i++){
    acumulador += 5;
  }
  return acumulador;
}

module.exports = doWhile;