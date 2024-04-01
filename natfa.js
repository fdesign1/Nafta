


const myFunction = () =>{
    let Litros = prompt('Cuantos Litros de combustible repostaste?'); //pregunta 1 Litros
    let Precio = prompt('De cuanto es el precio del combustible por Litro?'); //pregunta 2   --- Precio combustible por 1 litro
    let Moneda = 'Pln'
    let Consumo = 7;


    if  (Litros >= 0){
        document.getElementById('GastoTable').innerHTML = `Gastaste: ${Litros*Precio} ${Moneda}` //ecuacion de litros por el precio del combustible 
        document.getElementById('CombustibleRep').innerHTML =`${Litros} Litros` //No es Importante solo ingresa lo del prompt en la tabla directamente
    }
    else{
        document.getElementById('GastoTable').innerHTML ='el valor que ingresaste es incorrecto'
        document.getElementById('CombustibleRep').innerHTML ='el valor que ingresaste es incorrecto'
    }
    

    let Distance= prompt('Que distancia vas a recorrer?')  //Pregunta 4
    if (Distance > 0){
        document.getElementById('ConsumoTable').innerHTML =`A esa distancia consumira: ${(Distance * Consumo) / 100} Litros` //Ecuacion consumo
        document.getElementById('GastoKm').innerHTML = `Vas a gastar: ${(Math.round(Distance*Consumo/100)*Precio)} ${Moneda}` //Ecuacion Gasto
        document.getElementById('DistanciaRec').innerHTML =`${Distance} Km` //No es Importante solo ingresa lo del prompt en la tabla directamente
    }
    else{
        document.getElementById('ConsumoTable').innerHTML ='el valor que ingresaste es incorrecto'
    }




    //CAMBIO ACEITE 

    
  let CambioAceite = 132299;

  let Confirmar = confirm(' Queres calcular tambien cuando tenes que cambiar el aceite?');
  if (Confirmar === true){
    let Kmactuales = prompt('Cuantos km tiene el auto actualmente?');   //Pregunta acerca del Kilometraje
    if (Kmactuales > 0){
  document.getElementById('KmActuals').innerHTML = Kmactuales; //pone los Km actuales en la tabla html
  document.getElementById('ProxCambio').innerHTML = `Cambiar Aceite en: ${13000 - (Kmactuales - CambioAceite)} Kms`} //Total de Km recorridos
  else {
      document.getElementById('KmActuals').innerHTML =`El valor q ingresaste es incorrecto`
    
  }


  }


}

//LIMPIAR TABLA 


function reset(){
    var td = document.getElementsByTagName('td');

    for(var i = 0; i < td.length; i++){
        td[i].innerHTML = ''
    }
}

  





