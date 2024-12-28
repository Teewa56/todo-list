document.getElementById("toggle").onclick = () => {
    const body = document.body;

    if (body.classList.contains("light-mode")) {
        document.getElementById("toggle").classList.add("toggle-dark");
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        document.getElementById("toggle").classList.remove("toggle-dark");
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
};
//to diaplay the task input
document.getElementById("add-task").onclick = () => {
    document.getElementById("new-task").style.display = "flex";
    document.querySelector(".new-track-add").style.display = "none";
};

const to_do_list = document.getElementById("task-list");
const add_button = document.getElementById("add-list");
const todoInput = document.getElementById("input");

let listItems = [];//an empty array of the list

add_button.addEventListener('click', () => {
    const todoOutput = todoInput.value.trim();

    if (!todoOutput) {
        document.getElementById("demo").innerHTML = 'Space can\'t be empty!';
        return;
    }

    const newTask = { todoOutput };
    listItems.push(newTask);
    displayTasks();
    todoInput.value = "";
    document.getElementById("new-task").style.display = "none";    
    document.getElementById("demo").style.display = "none";    
    document.querySelector(".new-track-add").style.display = "flex";
});

function displayTasks() {
    to_do_list.innerHTML = ""; // Clear current tasks
    listItems.forEach((task, index) => { 
        const listDiv = document.createElement('div');
        listDiv.classList.add("new-task");
        listDiv.innerHTML = `<p>${task.todoOutput}</p> <button class="close-btn">&times;</button>`; // Use class for close button
        
        // Add event listener to close button
        listDiv.querySelector('.close-btn').addEventListener('click', () => {
            listItems.splice(index, 1); // Remove task from list
            displayTasks(); // Refresh displayed tasks
        });

        to_do_list.appendChild(listDiv);
    });
}