const inTask = document.querySelector("#inputText");
const btnAdd = document.querySelector("#addButton");
// const btnClear = document.querySelector("#clearButton");
const listTask = document.querySelector("#listTask");
let arr=[];

btnAdd.addEventListener("click",addList)


// btnClear.addEventListener("click",clearList)

// function clearList()
// {
// }


function addList()
{
    const newTodo = inTask.value;
    if(newTodo !== "")
    {
        arr.push(newTodo);
    }
    // console.log(newTodo.value);
    inTask.value = "";
    addLocalStorage(arr);
    newToDoItem(newTodo);
}

function newToDoItem (item)
{
    const toDoItem = document.createElement("li");
    toDoItem.innerHTML = item;;
    listTask.appendChild(toDoItem);
    localStorage.setItem()
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