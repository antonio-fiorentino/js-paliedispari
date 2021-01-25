function invert(word) {
    var reversed = '';
    for(var x = word.length - 1; x >= 0; x--) {
      reversed += word[x];
    }
    return reversed;
}

function isValid(inputString) {
  if(inputString.includes(' ')) {
    return false;
  }
  if(!isNaN(inputString)) {
    return false;
  }
  if(inputString.length < 3) {
    return false;
  }
  return true;
}

var button = document.getElementById('button');

button.addEventListener('click', function(){

  var parola = prompt('Inserisci la parola');
  if(!isValid(parola)) {

    alert('parola non valida!')

  } else {
    var result = invert(parola);

    if(result === parola) {
      alert('palindroma!')
    } else {
      alert('non è palindroma!')
    }
  }
});
