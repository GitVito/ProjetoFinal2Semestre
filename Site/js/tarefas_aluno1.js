function puxarDesempenho(){
    const contDesempenho = document.getElementById('divViewDesem');
    const contAtividade = document.getElementById('divViewAtiv');
    const conteudoAtiv = document.getElementById('contAtividades'); //id_div
    const conteudoDesemp =document.getElementById('contDesempenho'); //id_div

    contDesempenho.classList.remove('viewDesempenho');
    contAtividade.classList.remove('viewAtividadesSelect');

    contDesempenho.classList.add('viewDesempenhoSelect');
    contAtividade.classList.add('viewAtividades');

    conteudoAtiv.classList.remove('conteudoPositView');
    conteudoDesemp.classList.remove('conteudoDesempenhoFora');

    conteudoAtiv.classList.add('conteudoAtividadesFora');
    conteudoDesemp.classList.add('conteudoPositView');


    let areaPagTarefa = document.getElementById("tarefa-click");

    areaPagTarefa.style.left= "-100";
    areaPagTarefa.style.display= "none";
}

function puxarAtividade(){

    const contDesempenho = document.getElementById('divViewDesem');
    const contAtividade = document.getElementById('divViewAtiv');
    const conteudoAtiv = document.getElementById('contAtividades'); //id_div
    const conteudoDesemp =document.getElementById('contDesempenho'); //id_div

    contDesempenho.classList.remove('viewDesempenhoSelect');
    contAtividade.classList.remove('viewAtividades');

    contDesempenho.classList.add('viewDesempenho');
    contAtividade.classList.add('viewAtividadesSelect');

    conteudoAtiv.classList.remove('conteudoAtividadesFora');
    conteudoDesemp.classList.remove('conteudoPositView');

    conteudoAtiv.classList.add('conteudoPositView');
    conteudoDesemp.classList.add('conteudoDesempenhoFora');
}

function upGrafics(){

    var barra1 = document.getElementById('barraId1');
    var barra2 = document.getElementById('barraId2');
    var barra3 = document.getElementById('barraId3');
    var barra4 = document.getElementById('barraId4');
    var numberMedia = document.getElementById('up-number-media');
    

    console.log("recebaaaa");
    barra1.classList.add("animation-barras");
    barra2.classList.add("animation-barras");
    barra3.classList.add("animation-barras");
    barra4.classList.add("animation-barras");
    numberMedia.classList.add("upNumber");
}

function resetGrafics(){

    let barra1 = document.getElementById('barraId1');
    let barra2 = document.getElementById('barraId2');
    let barra3 = document.getElementById('barraId3');
    let barra4 = document.getElementById('barraId4');
    let numberMedia = document.getElementById('up-number-media');

    barra1.classList.remove("animation-barras");
    barra2.classList.remove("animation-barras");
    barra3.classList.remove("animation-barras");
    barra4.classList.remove("animation-barras");
    numberMedia.classList.remove("upNumber");
}

function abrirPagTarefa(){
    let areaPagTarefa = document.getElementById("tarefa-click");

    areaPagTarefa.style.left= "0";
    areaPagTarefa.style.display= "block";
}

function voltarPagTarefas(){
    let areaPagTarefa = document.getElementById("tarefa-click");

    areaPagTarefa.style.left= "-100";
    areaPagTarefa.style.display= "none";
}

function corUpload(){
    let imgCor = document.getElementById("imgUpload");
    let inputFileAluno = document.getElementById("fileAluno");

    if (inputFileAluno.value != ""){
        imgCor.style.filter= "invert(100%)";
        imgCor.style.backgroundColor="#dde102";
        imgCor.style.padding= "0.3em";
        imgCor.style.transform= "scale(1.2)";
        imgCor.style.borderRadius= "0.2em";
    }
}


function saveFile(){
    alert("O arquivo foi enviado para seu professor(a)");
}























function abrirInput(){
    let inputPush = document.getElementById("inputArea");
    inputPush.style.right= "0";


    
}

function fecharInput(){
    let inputPull = document.getElementById("inputArea");
    inputPull.style.right= "-100%";
}