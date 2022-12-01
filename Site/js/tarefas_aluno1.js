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