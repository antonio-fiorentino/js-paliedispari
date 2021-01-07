
// Scelta pari o dispari
// var scelta = prompt('Pari o dispari?');
// if (scelta !== 'pari' || scelta !== 'dispari') {
//   alert('Qualcosa non ha funzionato')
// }

// Scelta numero
var numeroUtente = prompt('Scegliere un numero da 1 a 5');
if (numeroUtente > 5 || numeroUtente < 1){
  alert('Numero non disponibile');
}

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  console.log(result);
  return result;

}

function add(num1, num2){
  var somma = num1 + num2;
}
randomNumber(1, 5);

add(numeroUtente, randomNumber);
