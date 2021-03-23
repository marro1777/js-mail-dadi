var mail = ["marco@gmail.com", "gianluca@gmail.com", "pincopallo@gmail.com", "unamaildiversa@gmail.com", "altramail@gmail.com"];

var mailUtente = prompt("inserisci la tua Mail:");
for (var i = 0; i < mail.length; i++) {
  if (mailUtente == mail[i]) {
    alert("Benvenuto");
    break;
  } else {
    alert("inserisci un'altra Mail");
    location.reload();
  }
}