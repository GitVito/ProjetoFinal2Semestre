var peso = 0;
var altura = 0;
var imc = 0;
var resposta = "";


function chamar(){ 
    chat = document.getElementById('chat').value;

    imc = chat/(altura*altura);
    document.getElementById('resposta').innerHTML = chat;
    
    
}


