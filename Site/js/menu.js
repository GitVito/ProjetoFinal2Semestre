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

function dropMenu(){
  let dropId = document.getElementById('id-dropIcon');
  let dropDownFundo = document.getElementById('dropDownPlace');

  dropId.style.transform = 'rotate(270deg)';

  setTimeout(function(){
    dropDownFundo.style.zIndex = '2000';
  }, 2000);
  
  dropDownFundo.classList.remove('dropDownPositionClose');
  dropDownFundo.classList.add('dropDownPositionOpen');
}