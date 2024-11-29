const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
  const newTodotext = newTodoInput.value;
  if (newTodotext !== "") {
    const newTodoItem = document.createElement("li");
    newTodoItem.innerText = newTodotext;
    const delTodoBtn = document.createElement("button");
    delTodoBtn.innerText = "x";

    delTodoBtn.classList.add("delete-todo-btn");
    delTodoBtn.addEventListener("click", function () {
      newTodoItem.remove();
    });
    newTodoItem.appendChild(delTodoBtn);
    todoList.appendChild(newTodoItem);
    newTodoInput.value = "";
  }
});
