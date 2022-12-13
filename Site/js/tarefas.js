const inputElement = document.querySelector(".new-task-input");

const inputElement1 = document.querySelector(".new-task-input1");

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
  taskContent.innerText = inputElement.value + '      ' + inputElement1.value;
  

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











function openView(){
  let modalView = document.getElementById("modal-view");

  modalView.style.display= "block";
}

function openEdit(){
  let modalEdit = document.getElementById("modal-edit");

  modalEdit.style.display= "block";
}



function closeView(){
  let modalView = document.getElementById("modal-view");

  modalView.style.display= "none";


  let config = document.getElementById("configAtv");
  let atividade1 = document.getElementById("ativ1");

  config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);
}

function closeEdit(){
  let modalEdit = document.getElementById("modal-edit");

  modalEdit.style.display= "none";


  let config = document.getElementById("configAtvEdit");
  let atividade1 = document.getElementById("ativ1-edit");

  // config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);

}

function dropConfig(){
  let config = document.getElementById("configAtv");
  let atividade1 = document.getElementById("ativ1");

  // config.style.transition= "5s linear";
  config.style.top= "100%";
  config.style.zIndex= "1";

  setTimeout(atividade1.style.overflow= "visible", 2000);
  setTimeout(config.style.display= "block", 2000);

  
}

function upDropConfig(){
  let config = document.getElementById("configAtv");
  let atividade1 = document.getElementById("ativ1");

  // config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);

  
}

function puxarEditarBtn(){
  let config = document.getElementById("configAtv");
  let atividade1 = document.getElementById("ativ1");
  let modalView = document.getElementById("modal-view");
  let modalEdit = document.getElementById("modal-edit");

  modalEdit.style.display= "block";

  modalView.style.display= "none";

  // config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);


  let configEdit = document.getElementById("configAtvEdit");
  let atividade1Edit = document.getElementById("ativ1-edit");

  configEdit.style.transition= "5s linear";
  configEdit.style.top= "100%";
  configEdit.style.zIndex= "1";

  setTimeout(atividade1Edit.style.overflow= "visible", 2000);
  setTimeout(configEdit.style.display= "block", 2000);
}


function dropConfigEdit(){
  let configEdit = document.getElementById("configAtvEdit");
  let atividade1Edit = document.getElementById("ativ1-edit");

  configEdit.style.transition= "5s linear";
  configEdit.style.top= "100%";
  configEdit.style.zIndex= "1";

  setTimeout(atividade1Edit.style.overflow= "visible", 2000);
  setTimeout(configEdit.style.display= "block", 2000);
}

function upDropConfigEdit(){
  let config = document.getElementById("configAtvEdit");
  let atividade1 = document.getElementById("ativ1-edit");

  // config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);

  
}

function salvarEdit(){

  let modalEdit = document.getElementById("modal-edit");

  modalEdit.style.display= "none";

  let config = document.getElementById("configAtvEdit");
  let atividade1 = document.getElementById("ativ1-edit");

  // config.style.transition= "5s linear";
  config.style.top= "-100%";
  config.style.zIndex= "-5";

  setTimeout(atividade1.style.overflow= "hidden", 2000);
  setTimeout(config.style.display= "none", 2000);

  alert("Edições na atividades salvas!");
}