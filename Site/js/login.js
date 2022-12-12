/*Movimentação de Divs*/

var id_aluno = document.getElementById("id-div-aluno");
var id_professor= document.getElementById("id-div-professor");
var id_escolha = document.getElementById("id-div-escolha");


function puxarAluno(){
    id_aluno.classList.add('divAlunoPosition1');
    id_escolha.classList.add('divEscolhaPosition1');
}

function voltarPuxarAluno(){

    id_aluno.classList.remove('divAlunoPosition1');
    id_escolha.classList.remove('divEscolhaPosition1');
}

function puxarProfessor(){
    id_professor.classList.add('loginProfessorPosition');
    id_escolha.classList.add('divEscolhaPosition2');
}

function voltarPuxarProfessor(){
    console.log('Volta funciona');
    id_professor.classList.remove('loginProfessorPosition');
    id_escolha.classList.remove('divEscolhaPosition2');
}

/*Fim-Movimentação de Divs*/


var digitoCpfEmail = "";

function digitarAluno(){
    digitoCpfEmail = document.getElementById('digitoCpfEmail').value;

    console.log(digitoCpfEmail);

    return true;
}

function apagarDigito(){
    document.getElementById('digitoCpfEmail').value = "";
    document.getElementById('digitoSenha').value = "";
    document.getElementById('digitoCpfEmailPro').value = 
    document.getElementById('digitoSenhapPro').value = "";
    console.log("Apagou");
}


