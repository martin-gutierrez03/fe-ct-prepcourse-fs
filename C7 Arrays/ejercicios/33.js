function combine(str1, str2, str3) {
  // Filtra las cadenas vacías
  const args = [str1, str2, str3].filter(str => str !== "");

  let result = "";
  // Verificamos que no haya accesos fuera de los límites del array
  let maxLength = Math.max(
    args[0] ? args[0].length : 0, 
    args[1] ? args[1].length : 0, 
    args[2] ? args[2].length : 0
  );

  // Recorremos el mayor de los 3 strings
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < args.length; j++) {
      // Añadimos el carácter del string correspondiente si existe
      if (i < args[j].length) {
        result += args[j][i];
      }
    }
  }

  return result;
}

module.exports = combine;