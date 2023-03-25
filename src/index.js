document.addEventListener("DOMContentLoaded", (e) => {
	e.preventDefault();
	// get data from the submitted form
	const myForm = document.getElementById("create-task-form");
	myForm.addEventListener("submit", (e) => {
		// Prevent the default Value
		e.preventDefault();
		const newTask = document.getElementById("new-task-description");
		const taskList = document.getElementById("tasks");
		const newTaskItem = document.createElement("li");
		newTaskItem.innerText = newTask.value;
		taskList.appendChild(newTaskItem);
		// Reset the dom
		e.target.reset();
	});
});