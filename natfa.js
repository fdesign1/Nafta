const myFunction = () =>{
    //pregunta 1
    var Litros = prompt('Cuantos Litros de combustible repostaste?');
    //pregunta 2
    var Precio = prompt('Ingresa el precio del combustible por Litro');
    if  (Litros >= 0){
        //ecuacion de litros por el precio del combustible 
        document.getElementById('GastoTable').innerHTML = `Gastaste: ${Litros*Precio} Zlotys`
        document.getElementById('CombustibleRep').innerHTML =`${Litros} Litros`
    }
    else{
        document.getElementById('GastoTable').innerHTML ='el valor que ingresaste es incorrecto'
        document.getElementById('CombustibleRep').innerHTML ='el valor que ingresaste es incorrecto'
    }
    //preguta 3 distancia>>>>>>>>>>>>>>>>>>>>>
    var Distance= prompt('Que distancia vas a recorrer?')
    if (Distance >= 0){
        document.getElementById('ConsumoTable').innerHTML =`A esa distancia consumira: ${(Distance * Precio) / 100} Litros`
        document.getElementById('DistanciaRec').innerHTML =`${Distance} Km`
    }
    else{
        document.getElementById('ConsumoTable').innerHTML ='el valor que ingresaste es incorrecto'
    }
  
    //Pregunta 4 Kilometraje
    var CambioAceite = 132299;
  var Kmactual = prompt('Cuantos km tiene el auto actualmente');
  if (Kmactual >= 0){
document.getElementById('KmActuals').innerHTML = Kmactual;
document.getElementById('Total').innerHTML = `haz recorrido:${Kmactual - CambioAceite} kms`}
else {
    document.getElementById('KmActuals').innerHTML =`El valor q ingresaste es incorrecto`
}
  }


  





