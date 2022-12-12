
//Firebase config.....
const firebaseConfig = {
  apiKey: "AIzaSyB0mRJtewMmLrtjVhKwO5jfVFQ4lY4zOFI",
  authDomain: "seed-f091d.firebaseapp.com",
  databaseURL: "https://seed-f091d-default-rtdb.firebaseio.com",
  projectId: "seed-f091d",
  storageBucket: "seed-f091d.appspot.com",
  messagingSenderId: "467421316797",
  appId: "1:467421316797:web:b8ae86d14e959af2b519d4",
  measurementId: "G-HMX1XZ8VG7"
};
   
// inicia o firebase 
const app = initializeApp(firebaseConfig);

function entrarProfessor() {
  firebase.auth().signInWithEmailAndPassword(
      form.email().value, form.password().value
  ).then(response => {
      window.location.href = "site/apostila.html";
  }).catch(error => {
      alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
      return "Usuário nao encontrado";
  }
  return error.message;
}

function entrarAluno() {
  firebase.auth().signInWithEmailAndPassword(
      form.email().value, form.password().value
  ).then(response => {
      window.location.href = "ProjetoFinal2Semestre/Site/apostila.html";
  }).catch(error => {
      alert(getErrorMessage(error));
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
      return "Usuário nao encontrado";
  }
  return error.message;
}
