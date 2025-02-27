// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  let redondeado = Math.round(num);
  if(redondeado === 0 && num !== 0){
    if(num < 0){
      redondeado = -1;
    }else{
      redondeado = 1;
    }
  }
  return redondeado;
}

module.exports = redondearHaciaArriba;