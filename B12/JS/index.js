const inTask = document.querySelector("#inputText");
const btnAdd = document.querySelector("#addButton");
// const btnClear = document.querySelector("#clearButton");
const listTask = document.querySelector("#listTask");
// const dayTime = document.querySelector(".myDayTime");
// console.log(dayTime);
let arr=[];

btnAdd.addEventListener("click",addList)


// btnClear.addEventListener("click",clearList)

// function clearList()
// {
// }

// function setDayTime()

// setDayTime(dayTime);

function addList()
{
    const newTodo = inTask.value;
    if(newTodo !== "")
    {
        arr.push(newTodo);
    }
    // console.log(newTodo.value);
    inTask.value = "";
    console.log(arr);
    addLocalStorage(arr);
    newToDoItem(newTodo);
}

function newToDoItem (item)
{
    const toDoItem = document.createElement("li");
    toDoItem.innerHTML = item;;
    listTask.appendChild(toDoItem);
}

function addLocalStorage(arr)
{
    localStorage.setItem("arrToDo", JSON.stringify(arr));
}

function loadLocalStore()
{
    if( localStorage.getItem("arrToDo") !==null)
    {
        let arrTask = JSON.parse(localStorage.getItem("arrToDo"));
        for(let i of arrTask)
        {
            newToDoItem(i);
        }
    }
}
loadLocalStore();
