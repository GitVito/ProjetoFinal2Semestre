function entrarProfessor() {
  firebase.auth().signInWithEmailAndPassword(
      form.email().value, form.password().value
  ).then(response => {
      window.location.href = "https://gitvito.github.io/ProjetoFinal2Semestre/Site/arquivos.html";
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
      window.location.href = "https://gitvito.github.io/ProjetoFinal2Semestre/Site/arquivos.html";
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
