
//Selectors
const oneTodoButton = document.querySelector('.onetodo-button');
const oneTodoInput = document.querySelector('.onetodo-input');


const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');


//Event Listeners
oneTodoButton.addEventListener('click', addName);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterFunc);


//Functions

function addName(event) {
    event.preventDefault(); // prevent form from submitting
    const name = oneTodoInput.value;

    const headName = document.querySelector('#insert');
    const div1 = document.querySelector('.one');
    const div2 = document.querySelector('.two');

    // console.log(name, headName);
    headName.innerText = name;
    div1.classList.add('rise');

    
    div1.addEventListener('transitionend', () => {
        div1.remove();
    })
    
    setTimeout(()=> {
        div2.classList.add('pop');
    }, 1001);
}

function addTodo(event) {
    event.preventDefault(); // prevent form from submitting

    //adding todo element
    // div > {li, checkButton, dltButton}

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButtton = document.createElement('button');
    completedButtton.innerHTML = "<i class='fas fa-check'></i>";
    completedButtton.classList.add('complete-btn');
    todoDiv.appendChild(completedButtton);

    const dltButtton = document.createElement('button');
    dltButtton.innerHTML = "<i class='fas fa-trash'></i>";
    dltButtton.classList.add('dlt-btn');
    todoDiv.appendChild(dltButtton);


    // append todo element in DOM
    todoList.appendChild(todoDiv);




    // clear todo input value
    todoInput.value = '';
}


function deleteCheck(event) {
    const item = event.target;

    if (item.classList[0] === 'dlt-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');

        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }

    else if (item.classList[0] === 'complete-btn') {
        // console.log("clicked");

        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}


function filterFunc(event) {
    const todos = todoList.children;
    // console.log(todos[0]);

    for (let todo of todos) {
        switch (event.target.value) {

            case ('all'):
                todo.style.display = "flex";
                break;

            case ("completed"):
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;

            case ("todo"):
                if (todo.classList.contains('completed')) {
                    todo.style.display = "none";
                } else{
                    todo.style.display = "flex";
                }
                break;
        }
    }

}