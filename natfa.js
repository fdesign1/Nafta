const myFunction = () =>{
    var Litros = prompt('Cuantos Litros de combustible repostaste?'); //pregunta 1 Litros
    var Precio = prompt('Podes Ingresar el precio del combustible por Litro?'); //pregunta 2   --- Precio combustible por 1 litro
    if  (Litros >= 0){
        document.getElementById('GastoTable').innerHTML = `Gastaste: ${Litros*Precio} Zlotys` //ecuacion de litros por el precio del combustible 
        document.getElementById('CombustibleRep').innerHTML =`${Litros} Litros` //No es Importante solo ingresa lo del prompt en la tabla directamente
    }
    else{
        document.getElementById('GastoTable').innerHTML ='el valor que ingresaste es incorrecto'
        document.getElementById('CombustibleRep').innerHTML ='el valor que ingresaste es incorrecto'
    }
    var Consumo = prompt('Cuanto consume el auto cada 100km?')  //preguta 3 Consumo ----------------------->
    var Distance= prompt('Que distancia vas a recorrer?')  //Pregunta 4
    if (Distance > 0){
        document.getElementById('ConsumoTable').innerHTML =`A esa distancia consumira: ${(Distance * Consumo) / 100} Litros` //Ecuacion consumo
        document.getElementById('GastoKm').innerHTML = `Vas a gastar : ${(Distance*Consumo/100)*Precio} Zlotys` //Ecuacion Gasto
        document.getElementById('DistanciaRec').innerHTML =`${Distance} Km` //No es Importante solo ingresa lo del prompt en la tabla directamente
    }
    else{
        document.getElementById('ConsumoTable').innerHTML ='el valor que ingresaste es incorrecto'
    }
  var CambioAceite = 132299;
  var Kmactual = prompt('Cuantos km tiene el auto actualmente');   //Pregunta acerca del Kilometraje
  if (Kmactual > 0){
document.getElementById('KmActuals').innerHTML = Kmactual; //pone los Km actuales en la tabla html
document.getElementById('ProxCambio').innerHTML = `Cambiar Aceite en :${Kmactual - CambioAceite} kms`} //Total de Km recorridos
else {
    document.getElementById('KmActuals').innerHTML =`El valor q ingresaste es incorrecto`
}
}


  





