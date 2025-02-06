document.addEventListener("DOMContentLoaded", function() {
    checkCookie();
    document.getElementById("newTodoBtn").addEventListener("click", addTodo);
});

function addTodo() {
    const todo = prompt("Enter your TO DO:");
    if (todo !== null && todo.trim() !== "") {
        createTodoElement(todo.trim(), true);
    }
}

function createTodoElement(todoText, save = false) {
    const newChild = document.createElement("div");
    newChild.textContent = todoText;
    newChild.addEventListener("click", () => removeTodo(newChild));

    const parent = document.getElementById("ft-list");
    parent.insertBefore(newChild, parent.firstChild);

    if (save) {
        saveTodos();
    }
}

function removeTodo(element) {
    if (confirm(`Remove TO DO "${element.textContent}"?`)) {
        element.remove();
        saveTodos();
    }
}

function getTodoList() {
    return Array.from(document.getElementById("ft-list").children)
        .map(element => element.textContent.trim());
}

function saveTodos() {
    setCookie("ft-list", JSON.stringify(getTodoList()), 365);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const encodedValue = encodeURIComponent(cvalue); // เข้ารหัสค่า
    document.cookie = `${cname}=${encodedValue}; expires=${d.toUTCString()}; path=/;`;
}

function getCookie(cname) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cname) return decodeURIComponent(value); // ถอดรหัสค่า
    }
    return null;
}

function checkCookie() {
    let todoList = getCookie("ft-list");
    if (!todoList) {
        setCookie("ft-list", "[]", 365);
        return;
    }

    try {
        todoList = JSON.parse(todoList);
        if (!Array.isArray(todoList)) throw new Error("Invalid JSON");
    } catch (e) {
        todoList = [];
    }

    const parent = document.getElementById("ft-list");
    parent.innerHTML = ""; 
    
    todoList.forEach(todo => createTodoElement(todo, false));
}