window.onload = function() {
  // Controllo se un valore è presente nel localStorage al caricamento della pagina
  if(localStorage.getItem('name')) {
      // Se presente, lo visualizzo sopra l'input field
      document.getElementById('displayValue').innerHTML = localStorage.getItem('name');
  }
}

function saveValue() {
  // Prendo il valore dal campo di input
  var name = document.getElementById('name').value;

  // Salvo il valore nel localStorage
  localStorage.setItem('name', name);

  // Mostro il valore sopra l'input field
  document.getElementById('displayValue').innerHTML = name;
}

function removeValue() {
  // Rimuovo il valore dal localStorage
  localStorage.removeItem('name');

  // Rimuovo il valore visualizzato sopra l'input field
  document.getElementById('displayValue').innerHTML = '';
}


window.onload = function() {
  // Inizializza il contatore al valore salvato in sessionStorage o a 0 se non esiste
  var counter = sessionStorage.getItem('counter') || 0;
  
  // Mostra il valore iniziale del contatore
  document.getElementById('counter').innerHTML = counter;
  
  // Imposta un intervallo che si ripete ogni secondo
  setInterval(function() {
      // Incrementa il contatore
      counter++;
      
      // Salva il contatore nel sessionStorage
      sessionStorage.setItem('counter', counter);
      
      // Aggiorna il contatore visualizzato
      document.getElementById('counter').innerHTML = counter;
  }, 1000); // 1000 ms = 1 secondo
}
