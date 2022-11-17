let tabs = document.querySelectorAll(".tab");
let overlay = document.querySelector(".overlay");

let firstActive = document.querySelector(".tab-is-active");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    let tl = new TimelineLite();

    tabs.forEach((tab) => {
      tab.classList.remove("tab-is-active");
      this.classList.add("tab-is-active");
    });
  });
});

var auxi = 0;

function dropMenu(){
  let dropId = document.getElementById('id-dropIcon');
  let dropDownFundo = document.getElementById('dropDownPlace');

  dropId.style.transform = 'rotate(270deg)';


  setTimeout(function(){
    dropDownFundo.style.zIndex = '2000';
  }, 2000);
  
  dropDownFundo.classList.remove('dropDownPositionClose');
  dropDownFundo.classList.add('dropDownPositionOpen');

  dropDownFundo.style.zIndex = '1';
  
  dropDownFundo.classList.remove('dropDownPositionClose');
  dropDownFundo.classList.add('dropDownPositionOpen');

  auxi += 1;

    
    auxiResul = auxi/2;
    auxiString = '';

    if(auxi%2==0){
     auxiString = 'par';
    }
    if(auxi%2==1){
      auxiString = 'impar';
    }
}

function upDropDown(){
  let dropId = document.getElementById('id-dropIcon');
  let dropPlace = document.getElementById('dropDownPlace');

  if (auxiString == 'par'){

      console.log('1');



      dropPlace.classList.remove('dropDownPositionOpen');
      dropPlace.classList.add('dropDownPositionClose');


      dropId.style.transform = 'rotate(90deg)';

  }



}