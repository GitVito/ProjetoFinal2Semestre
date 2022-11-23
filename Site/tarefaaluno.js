const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);

  inputElement.value = "";

  updateLocalStorage();
};

const handleClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }

  updateLocalStorage();
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }

  updateLocalStorage();
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

const updateLocalStorage = () => {
  const tasks = tasksContainer.childNodes;

  const localStorageTasks = [...tasks].map((task) => {
    const content = task.firstChild;
    const isCompleted = content.classList.contains("completed");

    return { description: content.innerText, isCompleted };
  });

  localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
};

const refreshTasksUsingLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  if (!tasksFromLocalStorage) return;

  for (const task of tasksFromLocalStorage) {
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = task.description;

    if (task.isCompleted) {
      taskContent.classList.add("completed");
    }

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () =>
      handleDeleteClick(taskItemContainer, taskContent)
    );

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);
  }
};

refreshTasksUsingLocalStorage();

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());















aux = 0;
function caixa(){
    var id_caixa = document.getElementById('quadro2');
    id_caixa.classList.remove("quadro2");
    id_caixa.classList.add("quadro3");


    var id_caixa = document.getElementById('quadro3');
    id_caixa.classList.remove("quadro2");
    id_caixa.classList.add("quadro4");
    console.log('caixa');

    string = '';

    if(aux%2 ==0){
        string='par';
    }

    if(aux%2 ==1){
        string='ímpar';
    }

    console.log('teste2');
    aux += 1;

}

function caixafechar(){
    var id_caixa2 = document.getElementById('quadro2');
    var id_caixa3 = document.getElementById('quadro3');

    if (string == 'ímpar'){
        console.log(string);

        id_caixa2.classList.remove("quadro");
        id_caixa2.classList.add("quadro2");

        id_caixa3.classList.remove("quadro4");
        id_caixa3.classList.add("quadro2");

    }
    console.log('teste3');

}

aux2 = 0;
function arquivo(){
  console.log('arquivo');

  var arquivo = document.getElementById('container2');
  arquivo.classList.remove("container");
  arquivo.classList.add("container3");


  string2 = '';

  if(aux2%2 ==0){
    string2='par';
  }

  if(aux2%2 ==1){
    string2='ímpar';
  }

  console.log('teste2');
  aux2 += 1;
}

function arquivofechar(){
    var id_container2 = document.getElementById('container2');

    if (string2 == 'ímpar'){
        console.log(string2);

        id_container2.classList.remove("container3");
        id_container2.classList.add("container");

    }
    console.log('hhhh');

}

aux3 = 0;
function pasta(){
    var id_container3 = document.getElementById('container3');
    id_container3.classList.remove("container");
    id_container3.classList.add("container3");

    console.log('oi');

    string3 = '';

    if(aux3%2 ==0){
        string3='par';
    }

    if(aux3%2 ==1){
        string3='ímpar';
    }

    console.log('teste2');
    aux3 += 1;

}

function pastafechar(){
    var id_container4 = document.getElementById('container3');

    if (string3 == 'ímpar'){
        console.log(string3);

        id_container4.classList.remove("container3");
        id_container4.classList.add("container");

    }
    console.log('fecharpasta');

}

function aparecerpasta(){
  console.log("pasta");

  var pasta = document.getElementById('pasta2');
  pasta.classList.remove("noti2");
  pasta.classList.add("noti3");

  console.log("pasta");

  var texto = document.getElementById('texto').value;
  document.getElementById('mostrarpasta').innerHTML  = texto;


}

function aparecerfile(){
  console.log("file");

  var pasta = document.getElementById('arquivo2');
  pasta.classList.remove("noti2");
  pasta.classList.add("noti4");

  console.log("fileee");

  var nomearquivo = document.getElementById('nomearquivo').value;
  document.getElementById('mostrarfile').innerHTML  = nomearquivo;


}