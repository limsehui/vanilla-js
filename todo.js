const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const delBnt = document.createElement("button");
    delBnt.innerHTML ="❌";
    const span = document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBnt);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null){

    }else{

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();