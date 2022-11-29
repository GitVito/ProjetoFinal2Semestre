//Inicializa aplicação e sincroniza com o Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

//Importa principais métodos de autenticação.
import { getAuth , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

//Importa principais métodos de conexão com o Firestore.
import { getFirestore, getDoc,doc, getDocs, addDoc, collection,query, where } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";



//Firebase config.....
const firebaseConfig = {
  apiKey: "AIzaSyB0mRJtewMmLrtjVhKwO5jfVFQ4lY4zOFI",
  authDomain: "seed-f091d.firebaseapp.com",
  projectId: "seed-f091d",
  storageBucket: "seed-f091d.appspot.com",
  messagingSenderId: "467421316797",
  appId: "1:467421316797:web:b8ae86d14e959af2b519d4",
  measurementId: "G-HMX1XZ8VG7"
};
   
// inicia o firebase 
const app = initializeApp(firebaseConfig);


// referencia  pra seu banco


function entrar(){

  var email = getElementVal("digitoEmailPro")
  var senha = getElementVal("digitoSenhaPro")

  signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
      const user = userCredential.user
      alert("Usuario logado")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

  });
}
