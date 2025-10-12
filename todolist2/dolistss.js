const MyToDoTasks = JSON.parse(localStorage.getItem('MyToDoTasks')) || [];

function AddTask() {

    const inputElement = document.querySelector('.taskname');
    const taskName = inputElement.value;

    MyToDoTasks.push(taskName);
    localStorage.setItem('MyToDoTasks', JSON.stringify(MyToDoTasks));

    inputElement.value = '';

}

function DisplayTaskList() {

    let todolistHTML = '';


    for (i = 0; i < MyToDoTasks.length; i++) {

        const taskName = MyToDoTasks[i];
        const html = ` <li class="TaskListNames">${taskName} <button class ="deleteItem"; onclick= " DeleteTask(${i});DisplayTaskList();" >x</button>  `;

        todolistHTML += html;
    }

    document.querySelector('.TaskList').innerHTML = todolistHTML;

    document.querySelectorAll('.TaskListNames').forEach(task => {
        task.addEventListener('click', () => {
            task.classList.toggle('strikethrough');

        });
    });
}


function DeleteTask(index) {
    MyToDoTasks.splice(index, 1);
    localStorage.setItem('MyToDoTasks', JSON.stringify(MyToDoTasks));

}

