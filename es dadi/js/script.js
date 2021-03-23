var inizio = document.getElementById("inizio");
inizio.addEventListener("click",
  function() {
    alert("Tira il tuo dado");
    var utente = Math.floor((Math.random() * 6) + 1);
    alert("il tuo numero e': " + utente);

    alert("Il computer sta per tirare...");
    var computer = Math.floor((Math.random() * 6) + 1);
    alert("il computer ha fatto: " + computer);

    if (utente < computer) {
      alert("hai perso!");
    } else if (utente > computer) {
      alert("Hai vinto!");
    } else {
      alert("pari, riprova!");
      location.reload();
    }
  }
);