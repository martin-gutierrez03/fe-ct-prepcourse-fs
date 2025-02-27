function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  switch (true) {
    // Caso 1: números menores o iguales a 0 no son potencias de 2
    case numero <= 0:
      return false;
    // Caso 2: si n es potencia de 2, entonces n & (n - 1) debe ser 0
    case (numero & (numero - 1)) === 0:
      return true;
    // Caso por defecto: no es potencia de 2
    default:
      return false;
  }
}

module.exports = esPotenciaDeDos;
