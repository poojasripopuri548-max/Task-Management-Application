const API = "https://task-management-application-yj88.onrender.com/api";

let token = localStorage.getItem("token");

// Register
async function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        alert(data.message || "Registration Failed");
        return;
    }

    alert("Registration Successful!");
    console.log(data);
}

// Login
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        alert(data.message || "Login Failed");
        return;
    }

    localStorage.setItem("token", data.token);
    token = data.token;

    alert("Login Successful!");

    loadTasks();
}

// Add Task
async function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDesc").value;

    const response = await fetch(`${API}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            title,
            description
        })
    });

    if (!response.ok) {
        alert("Failed to add task");
        return;
    }

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDesc").value = "";

    loadTasks();
}

// Delete Task
async function deleteTask(id) {
    await fetch(`${API}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    });

    loadTasks();
}
async function completeTask(id) {

    await fetch(`${API}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            status: "Completed"
        })
    });

    loadTasks();
}
// Load Tasks
// Load Tasks
async function loadTasks() {
    if (!token) return;

    const response = await fetch(`${API}/tasks`, {
        headers: {
            Authorization: token
        }
    });

    const tasks = await response.json();

    document.getElementById("tasks").innerHTML =
        tasks.map(task => `
        <li>
            <b>${task.title}</b><br>
            ${task.description}<br>

            Status:
            <span style="color:${task.status === 'Completed' ? 'green' : 'orange'}">
                ${task.status}
            </span>

            <br><br>

            <button onclick="completeTask('${task._id}')">
                Complete
            </button>

            <button onclick="deleteTask('${task._id}')">
                Delete
            </button>
        </li>
        <hr>
        `).join("");
}

// Load tasks automatically if already logged in
loadTasks();