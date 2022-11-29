//Firebase config.....
const firebaseConfig = {
  apiKey: "AIzaSyDQXQhgBeYPxeiiKTur_irACskxneqpQ8s",
  authDomain: "seed-eca5d.firebaseapp.com",
  databaseURL: "https://seed-eca5d-default-rtdb.firebaseio.com",
  projectId: "seed-eca5d",
  storageBucket: "seed-eca5d.appspot.com",
  messagingSenderId: "709891424582",
  appId: "1:709891424582:web:1e45d8ed46bbc9cbeea547"
};
   
// inicia o firebase 
firebase.initializeAPP(firebaseConfig);

// referencia  pra seu banco

var usuarioSEED =  firebase.database().ref("usuario-seed")

document.getElementById("id-div-professor").addEventListener("btnEntrarDeVez",submitForm);

function submitForm(e){
  e.preventDefault();

  var email = getElementVal("digitoCpfEmailPro")
  var senha = getElementVal("digitoSenhapPro")

  console.log(email,senha);
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
};