fetch("http://localhost:3000/slots")
.then(res => res.json())
.then(data => {
  const div = document.getElementById("slots");
  data.forEach(slot => {
    if(!slot.booked){
      div.innerHTML += `<button>${slot.date} ${slot.time}</button>`;
    }
  });
});

function pay(){
  alert("Paiement simulé ✔️");
}
