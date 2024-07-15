var list = document.getElementById("list");

function addTodo(){
    var Todo = document.getElementById("Todo");
    list.innerHTML += `<li>  <input type='text' value='${Todo.value}'/>
    <button onclick='deleteTodo(event)'>Delete</button>       <button onclick='editTodo(event)'>Edit</button> </li>`
    Todo.value = "";   
}

function addTodoEnter(event){
    if(event.keyCode === 13){
        addTodo()
    }
}

function deleteTodo(event){
    event.target.parentNode.remove();
}

function editTodo(event){
    var input = event.target.parentNode.childNodes[1];
    input.disabled = false;
    input.focus()
    event.target.innerHTML = "Update"
    event.target.setAttribute("onclick", 'updateTodo(event)')
}

function updateTodo(event){
    var input = event.target.parentNode.childNodes[1];
    input.disabled = true;
    event.target.innerHTML = "Edit"

}

function deleteAll(){
    list.innerHTML = ''
}

