function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArray = arrayOfStrings.filter((elem) => {
      console.log(elem)
      console.log(elem[0] === "a")
      if(elem[0] === "a") return elem;
   })
   console.log(nuevoArray)
   return nuevoArray;
}
filter(['abajo', 'alerta', 'azteca', 'arbol'])
module.exports = filter;
