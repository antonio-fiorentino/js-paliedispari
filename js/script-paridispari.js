
// Scelta pari o dispari
var scelta = prompt('Pari o dispari?');
if (scelta === 'pari' || scelta === 'dispari') {
  // Scelta numero
  var numeroUtente = prompt('Scegliere un numero da 1 a 5');
  console.log('Il numero scelto è: ' + numeroUtente);
  if (numeroUtente > 5 || numeroUtente < 1){
    alert('Numero non disponibile');
  }

  function randomNumber(min, max) {
    var result = Math.floor(Math.random() * (max + 1 - min) + min);
    console.log('Il numero del computer è: ' + result);
    return result;

  }

  // function add(num1, num2){
  //     var somma = parseInt(num1) + parseInt(num2);
  //     console.log('Il risultato è: ' + somma);
  //     return somma;
  //   }

  function add(num1,num2) {
    return parseInt(num1) + parseInt(num2)
    console.log('Il risultato è: ' + add);
  }

  var result = randomNumber(1, 5);
  add(numeroUtente, result);

  if (somma % 2 === 0 && scelta === 'pari') {
    alert('Complimenti hai vinto');
  }else if (somma % 2 !== 0 && scelta === 'dispari') {
    alert('Complimenti hai vinto');
  }else{
    alert('Hai perso');
  }
}else {
  alert('Qualcosa non ha funzionato');
}
