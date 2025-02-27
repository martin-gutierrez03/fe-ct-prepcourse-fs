function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  /* for (let i = 0; i < secuencia.length; i++) {
    if (Number.isInteger(n % secuencia[i])){
      return secuencia[i];
    }
  } */
  return secuencia.find(num => num % n === 0);
}

module.exports = encontrarPrimerMultiploDeN;