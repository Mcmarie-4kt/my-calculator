const input = document.querySelector("input");
const button = document.querySelector("button");
const todoList = document.querySelector(".todo-list");

// Add task
button.addEventListener("click", addTask);

// Add task by pressing Enter
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = task;

    // Mark as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
} 
// Save tasks
localStorage.setItem("tasks", JSON.stringify(tasks));

// Load tasks
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];