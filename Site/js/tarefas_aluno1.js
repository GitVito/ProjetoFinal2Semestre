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