
let container = document.querySelector("#taskContainer");
let addTask = document.querySelector("#addTask");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

let editTask = null;



addBtn.addEventListener("click", () => {

    if (addTask.value.trim() === "") {
        alert("Write something");
        return;
    }



    if (editTask !== null) {
        editTask.querySelector("span").textContent = addTask.value.trim();

        editTask = null;
        addBtn.textContent = "Add";
        addTask.value = "";
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="check">
        <span>${addTask.value.trim()}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    let check = li.querySelector(".check");
    let span = li.querySelector("span");
    let editBtn = li.querySelector(".editBtn");
    let deleteBtn = li.querySelector(".deleteBtn");

    check.addEventListener("change", () => {
        span.style.textDecoration =
            check.checked ? "line-through" : "none";

        editBtn.disabled = check.checked;
    });


    editBtn.addEventListener("click", () => {
        addTask.value = span.textContent;
        editTask = li;

        addBtn.textContent = "Save";
        addTask.focus();
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
        if (editTask === li) {
            editTask = null;
            addBtn.textContent = "Add";
            addTask.value = "";
        }

        li.remove();
    });

    addTask.value = "";
});

