

//Inicializa aplicação e sincroniza com o Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

//Importa principais métodos de autenticação.
import { getAuth,  signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

//Importa principais métodos de conexão com o Firestore.
import { getFirestore, getDoc,doc, getDocs, addDoc, collection,query, where } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";


//Firebase config.....
const firebaseConfig = {
    apiKey: "AIzaSyAn3WDqBGsl9_IMhdsgVvXI4tTWvu3KTOQ",
    authDomain: "usuario-a882f.firebaseapp.com",
    projectId: "usuario-a882f",
    storageBucket: "usuario-a882f.appspot.com",
    messagingSenderId: "995646945266",
    appId: "1:995646945266:web:05f9022b9724f19b879d6b"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementsByTagName("button")[1].addEventListener('click', function(){

    email = document.getElementById("digitoCpfEmail").value 
    senha = document.getElementById("digitoSenha").value 

    
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {

    alert ("sucesso")

    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})