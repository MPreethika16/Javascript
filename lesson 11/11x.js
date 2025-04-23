const todoList=JSON.parse(localStorage.getItem('todoList'))||[
    {
        name:'make dinner',
        dueDate:'2022-12-2'
    }];
renderTodoList();

function renderTodoList(){
    let todoListHtml= '';
    for(let i=0;i<todoList.length;i++){
        
        const todoObject= todoList[i];
        const name=todoObject.name;  //can also use shortcut konown as destructing const {name}=todoObject
        const dueDate=todoObject.dueDate;
        const html=`
                        <div>${name}</div>
                        <div>${dueDate}</div>
                        <button onclick="
                        todoList.splice(${i},1);
                        renderTodoList();
                        saveTodoList();
                        " class="delete-btn">Delete</button>
                    `;
        todoListHtml+=html;
    }
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}
//console.log(todoListHtml);
//document.querySelector('.js-todo-list').innerHTML= todoListHtml;
function addTodo(){
        const inputElement=document.querySelector('.js-name-input');
        const name=inputElement.value;

        const dueDateElement=document.querySelector('.js-due-date-input');
        const dueDate=dueDateElement.value;
        todoList.push({
            name,
            dueDate
        });
       
        inputElement.value='';
        renderTodoList();
        saveTodoList();
}
function saveTodoList(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}
