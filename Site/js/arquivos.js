aux = 0;
function caixa(){
    var id_caixa = document.getElementById('opcoes');
    id_caixa.classList.remove("caixa");
    id_caixa.classList.add("abriropcoes");

    console.log('teste');

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
    var id_caixa = document.getElementById('opcoes');

    if (string == 'ímpar'){
        console.log(string);

        id_caixa.classList.remove("abriropcoes");
        id_caixa.classList.add("caixa");

    }
    console.log('teste3');

}

aux2 = 0;
function arquivo(){
    var id_container = document.querySelectorAll('.container');
    id_container.style.display = 'visible';


    console.log('oi');

    string = '';

    if(aux2%2 ==0){
        string='par';
    }

    if(aux2%2 ==1){
        string='ímpar';
    }

    console.log('fdgdfg');
    aux2 += 1;

}

function arquivofechar(){
    var id_container = document.getElementById('container');

    if (string == 'ímpar'){
        console.log(string);

        id_container.classList.remove("container2");
        id_container.classList.add("container");

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
    var id_container3 = document.getElementById('container3');

    if (string3 == 'ímpar'){
        console.log(string);

        id_container3.classList.remove("container3");
        id_container3.classList.add("container");

    }
    console.log('teste3');

}

function aparecerfile(){
  var texto = document.getElementById('texto').value;
  document.getElementById('mostrarpasta').innerHTML = texto;


}

const inputElement1 = document.querySelector(".new-task-input1");
const addTaskButton1 = document.querySelector(".new-task-button1");

const tasksContainer1 = document.querySelector(".tasks-container1");

const validateInput = () => inputElement1.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement1.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement1.value;

  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskItemContainer1, taskContent)
  );

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer1.appendChild(taskItemContainer);

  inputElement.value = "";

  updateLocalStorage();
};

const handleClick = (taskContent) => {
  const tasks = tasksContainer1.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }

  updateLocalStorage();
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer1.childNodes;

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
  const tasks = tasksContainer1.childNodes;

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

    tasksContainer1.appendChild(taskItemContainer);
  }
};

refreshTasksUsingLocalStorage();

addTaskButton1.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());

