function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumatoria = 0;
  resultadosTest.forEach(element => sumatoria += element);
  return sumatoria / resultadosTest.length;
}

module.exports = promedioResultadosTest;
