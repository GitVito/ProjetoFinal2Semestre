//Inicializa aplicação e sincroniza com o Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

//Importa principais métodos de autenticação.
import { getAuth , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

//Importa principais métodos de conexão com o Firestore.
import { getFirestore, getDoc,doc, getDocs, addDoc, collection,query, where } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";



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