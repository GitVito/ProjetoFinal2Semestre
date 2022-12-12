
function mudouCor(){
    alert("Cor de fundo de chat alterada com sucesso!");

    let colors1 = document.getElementById('colors1');
    let colors2 = document.getElementById('colors2');
    let colors3 = document.getElementById('colors3');
    let colors4 = document.getElementById('colors4');
    let colors5 = document.getElementById('colors5');

    if (compara1 == 1){
        colors1.style.border= "4px solid green";
        console.log('Miau');

        colors2.style.border= "none";
        colors3.style.border= "none";
        colors4.style.border= "none";
        colors5.style.border= "none";
    }
    else if(compara1 == 2){
        colors2.style.border= "4px solid green";
        console.log('Miau2');

        colors1.style.border= "none";
        colors3.style.border= "none";
        colors4.style.border= "none";
        colors5.style.border= "none";
    }
    else if(compara1 == 3){
        colors3.style.border= "4px solid green";
        console.log('Miau3');

        colors1.style.border= "none";
        colors2.style.border= "none";
        colors4.style.border= "none";
        colors5.style.border= "none";
    }
    else if(compara1 == 4){
        colors4.style.border= "4px solid green";
        console.log('Miau4');

        colors1.style.border= "none";
        colors2.style.border= "none";
        colors3.style.border= "none";
        colors5.style.border= "none";
    }
    else if(compara1 == 5){
        colors5.style.border= "4px solid green";
        console.log('Miau5');

        colors1.style.border= "none";
        colors2.style.border= "none";
        colors3.style.border= "none";
        colors4.style.border= "none";
    }
    
}

var compara1 = 0;

function selectColors1(){
    let colors1 = document.getElementById('colors1');
    colors1.style.border= "4px solid #aaaaaa";
    compara1 = 1;
}
function selectColors2(){
    let colors2 = document.getElementById('colors2');
    colors2.style.border= "4px solid #aaaaaa";
    compara1 = 2;
}
function selectColors3(){
    let colors3 = document.getElementById('colors3');
    colors3.style.border= "4px solid #aaaaaa";
    compara1 = 3;
}
function selectColors4(){
    let colors4 = document.getElementById('colors4');
    colors4.style.border= "4px solid #aaaaaa";
    compara1 = 4;
}
function selectColors5(){
    let colors5 = document.getElementById('colors5');
    colors5.style.border= "4px solid #aaaaaa";
    compara1 = 5;
}



  //Dark Mode
  const changeThemeBtn = document.querySelector("#change-theme")//Pegar a chakboox  e fazer o evento com base nela


// Toggle dark mode
function toggleDarkMode(){
  document.body.classList.toggle("dark"); //Pegando as classes do Body 
}

// Carregar o modo claro ou escuro
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

 changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Salva ou remove o Dark Mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
}); 
